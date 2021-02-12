<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/blue.jpg">
      </div>
      <!-- 登录注册区域 -->
      <el-form label-width="0" class="login_form" :model="login_from" :rules="login_rules" ref="loginFromRef">
        <!-- 登录文本 -->
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-user" placeholder="请输入用户名" v-model="login_from.username"></el-input>
        </el-form-item>
        <!-- 注册文本 -->
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-3702mima" placeholder="请输入密码" v-model="login_from.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button type="info" @click="initLoginFrom()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_from: {
        username: 'admin',
        password: '123456'
      },
      // 重置表单内容
      login_rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '用户名长度在 3 到 8 个字符', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 8, message: '密码长度在 3 到 8 个字符', trigger: 'blur' }]
      }
    }
  },

  methods: {
    // 重置表单
    initLoginFrom () {
      this.$refs.loginFromRef.resetFields()
    },
    // 登录预校验
    login () {
      this.$refs.loginFromRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.login_from)
        if (!res.isUser) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', 'token')
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
