<template>
  <div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueOffline from 'vue-offline'
Vue.use(VueOffline)
import axios from 'axios'
export default {
  data(){
    return{
    }
  },
  methods:{
    connCheck(){
      if(this.isOnline){
        console.log("You are now online.")
      } else {
        console.log("You are now offline.")
      }
    },
    
    login() {
      this.connCheck()
      let thisData = {}
      thisData.id = this.$q.localStorage.getItem("id")
      thisData.username = this.$q.localStorage.getItem("username")
      thisData.password = this.$q.localStorage.getItem("password")
      if(this.isOnline === true){
        if(this.$q.localStorage.getItem("loggedIn") === 'online'){
          // already logged in online, remaining logged in online
        }
        if(this.$q.localStorage.getItem("loggedIn") === 'offline'){
          // already logged in offline, switch to online
          this.$q.localStorage.set("loggedIn", "online")
          console.log("You are still loggedIn offline, but your connection is now online.")
          this.transmitLogin()
        }
        if(this.$q.localStorage.getItem("loggedIn") === 'not'
        ||this.$q.localStorage.getItem("loggedIn") !== ''){
          // not logged in, logon online
          this.$q.localStorage.set("loggedIn", "online")
          console.log("You are not yet loggedIn, but you are online.")
          this.transmitLogin()
        }
      }
      if(this.isOnline === false) {
        if(this.$q.localStorage.getItem("loggedIn") === 'online'){
          // already logged in online, switch to offline
          console.log("You are loggedIn as online, but your connection is offline.")
          this.$q.localStorage.set("loggedIn", "offline")
        }
        if(this.$q.localStorage.getItem("loggedIn") === 'offline'){
          // already logged in, still offline
        }
        if(this.$q.localStorage.getItem("loggedIn") === 'not'
        ||this.$q.localStorage.getItem("loggedIn") !== ''){
          if(this.$q.localStorage.getItem("username") === this.loginSent.username
          && this.$q.localStorage.getItem("password") === this.loginSent.password){
            this.$q.localStorage.set("loggedIn", "offline")
            thisData.loggedIn = "offline"
            thisData = JSON.stringify(thisData)
            this.loginUser(thisData)
            this.redirectPage(true)
            console.log("You are currently loggedIn, and your connection is offline.")
          } else {
            console.log("Wrong username or password.")
          }
        }
      }
    },

    logout() {
      this.connCheck()
      this.logoutUser()
      this.redirectPage(false)
      this.$q.localStorage.set("loggedIn", "not")
      console.log("You are now loggedOut.")
    },

    transmitLogin(){
      axios
      .post('/authenticate.php', this.loginSent )
      .then(response=> {
        // Logging in
        if(response.data.substring(0,7)==="Success"){
          var loginData = response.data.substring(8,response.data.length)
          //console.log("loginSent in transmitLogin in NetStatus.vue: ", this.loginSent)
          loginData = JSON.parse(loginData)
          loginData.loggedIn = 'online'
          loginData.password = this.loginSent.password
          loginData = JSON.stringify(loginData)
          this.loginUser(loginData)
          console.log("You are now loggedIn.")
          loginData = JSON.parse(loginData)
          this.$q.localStorage.set("loggedIn", "online")
          this.$q.localStorage.set("username", loginData.username)
          this.$q.localStorage.set("password", loginData.password)
          this.$q.localStorage.set("id", loginData.id)
          this.redirectPage(true)
        } else {
          alert(response.data)
        }
      })
      .catch(function(error) {
          console.log("Axios Error: ",error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>