<template>
  <div class="vh-100" id="app">
      <b-navbar toggleable="lg" type="danger" variant="light shadow" class="py-0">
        <b-navbar-brand to="/">
          <img width="150" src="@/assets/logo.svg" alt="">
          <span style="font-size:2.5rem"><strong>鍵盤大檸檬</strong></span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav type="danger">
          <b-container>
            <b-navbar-nav>
              <b-nav-item to="/teamrecord">球隊戰績</b-nav-item>
              <b-nav-item to="/perform">每日賽事</b-nav-item>
              <b-nav-item to="/introduce">球員介紹</b-nav-item>
              <b-nav-item to="/connection">相關連結</b-nav-item>
              <b-nav-item to="/game">今日賽事</b-nav-item>
              <b-nav-item v-if="user.id.length > 0" to="/live">文字轉播</b-nav-item>
              <b-nav-item to="/shop">好禮兌換</b-nav-item>
            </b-navbar-nav>
          </b-container>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto bg-light">
            <b-button variant="primary" class="h-50 mr-3 mt-2" @click="buyList()">
              購物車 <b-badge variant="light">{{ buyWhat }}</b-badge>
            </b-button>
            <b-dropdown id="dropdown-form" text="登入/Log in" ref="dropdown" variant="primary" class="m-2 " right>
              <b-form>
                <b-dropdown-form>
                  <!-- 還沒登入的登入面板 -->
                  <div v-if="user.id.length === 0">
                    <b-form-group label="帳號" label-for="dropdown-form-email" @submit.stop.prevent>
                      <b-form-input
                        v-model="account"
                        id="dropdown-form-email"
                        size="sm"
                        placeholder="輸入4~12碼帳號"
                        :state="accountState"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="密碼" label-for="dropdown-form-password">
                      <b-form-input
                        v-model="password"
                        id="dropdown-form-password"
                        type="password"
                        size="sm"
                        placeholder=""
                        :state="passwordState"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <!-- 登入後的登入面板 -->
                  <div class="text-center" v-if="user.id.length > 0">
                    <p>目前的使用者</p>
                    <p>{{ user.name }}</p>
                    <p>歡迎你登入喔</p>
                  </div>
                  <b-button v-if="user.id.length === 0" variant="primary" size="sm" @click="login()">登入</b-button>
                  <b-button v-if="user.id.length > 0" class='ml-2' variant="danger" size="sm" @click="logout()">登出</b-button>
                  <b-button class='ml-2' variant="info" size="sm" @click="register()">註冊</b-button>
                </b-dropdown-form>
              </b-form>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <div id="center">
        <router-view/>
    </div> 
    <div>
      <footer class="bg-primary text-center text-lg-start">
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
          <a class="text-white">© 2020 Copyright: 檸檬酸 提供給各位看比賽的天地</a>
        </div>
        <!-- Copyright -->
      </footer>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    buyWhat () {
      return this.$store.state.cart.length
    },
    accountState () {
      if (this.account.length === 0) {
        return null
      } else if ( this.account.length >= 4 && this.account.length <= 20) {
        return true
      } else {
        return false
      }
    },
    passwordState () {
      if (this.password.length === 0) {
        return null
      } else if ( this.password.length >= 4 && this.password.length <= 20) {
        return true
      } else {
        return false
      }      
    }
    
  },
  methods: {
    buyList () {
      this.$store.commit('buyList')
    },
    login () {
      if (this.accountState && this.passwordState) {
        this.axios.post(process.env.VUE_APP_API + '/users/login', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$store.commit('login', res.data.result)
              alert('登入成功')
            } else {
              alert(res.data.message)
            }
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      }
    },
    logout () {
      this.axios.delete(process.env.VUE_APP_API + '/users/logout')
        .then(res => {
          if (res.data.success) {
            alert('已成功登出')

            this.$store.commit('logout')

            // 若在轉播頁面登出，引導至觀看頁面
            if (this.$route.path === '/live') {
              this.$route.push('/game')
            }
          } else {
            alert(res.data.message)
          }
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    },
    heartbeat() {
      this.axios.get(process.env.VUE_APP_API + '/users/heartbeat')
        .then(res => {
          if ( this.user.id.length > 0) {
            if (!res.data) {
              alert('請重新登入')
              this.$store.commit('logout')
            }
          }
        })
        .catch(error => {
          alert('錯誤')
          this.$store.commit('logout')
        })
    },
    register () {
      if (this.accountState && this.passwordState) {
        this.axios.post(process.env.VUE_APP_API + '/users/', this.$data)
          .then(res => {
            if (res.data.success) {
              alert('註冊成功')
            } else {
              alert(res.data.message)
            }
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      }
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

  #center
    height calc(100vh - 142px)
    background-image url("../src/assets/bg2.jpg")
    background-size cover
    overflow auto
</style>
