<template lang="html">

    <section id="login" v-bind:class="isShake">
        <div class="login-admin">
      <form v-if="formlogin">
        <h2>Login</h2>
        <div class="info" v-bind:class="good">
          <p>{{ alert.message }}</p>
          <p v-show="login.loginName && login.loginPassword">{{login.loginName}}</p>
        </div>
        <input type="text" v-model="login.loginName" placeholder="Username" />
        <input type="password" v-model="login.loginPassword" placeholder="Password" />
        <button v-on:click="onSubmit">Log in</button>
      </form>
        </div>
      <div class="button-2">
        <router-link :to="{ name: 'admin'}" v-if="loginAdmin" >Click to enter>>>>>></router-link>
      </div>

    </section>






</template>

<script>

export default {
  name: "Adminlogin",
  data(){
    return {
      formlogin:true,
      loginAdmin:false,
      alert: {
        message: ""
      },
      login: {
        loginName: "",
        loginPassword: ""
      },
      shake: false,
      good: "",
      fake: {
        login: "sree",
        password: "admin"
      }

    }

  },
  computed: {
    isShake: function(){
      if(this.shake == true){
        return 'shake'
      }
      return 'none'
    }
  },
  methods: {
    onSubmit() {

      event.preventDefault();
      this.shake = false
      setTimeout(()=>{
        if (
          this.fake.login == this.login.loginName &&
          this.fake.password == this.login.loginPassword
        )
        {
          this.alert.message = "Hello "+this.fake.login;
          this.loginAdmin=true;
          this.formlogin=false;

        } else {
          this.shake = true;
          this.alert.message = "Incorrect username and password";
        }
      },1000)
      console.log(this.shake)

    }
  }
}
</script>

<style lang="css" scoped>
html, body{
  width:100%;
  height:100%;
  margin:0px;
  font-family: 'Work Sans', sans-serif;
}

body{
  background-image:url('https://images-assets.nasa.gov/image/6900952/6900952~orig.jpg');
  background-size: cover;
  display: flex;
  flex-direction:center;
  justify-content:center;
  align-items:center;
  color: #fff;
}

section{
  background-color: rgb(160, 209, 209);
  width:25%;
  min-height:25%;
  display:flex;
  flex-direction:column;
  margin-left:auto;
  margin-right:auto;
}
form{
  display:flex;
  flex-direction:column;
  padding: 15px;
}
h2{
  font-family: 'Archivo Black', sans-serif;
  color:#e0dada;
  margin-left:auto;
  margin-right:auto;
}

.info{
  width:100%;
  padding: 1em 5px;
  text-align:center;
  min-height:45px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.info.error{
  border:1px solid #a90e0;
  background-color: #ff3c41;
  color:#a90e0;
}
.info p{
  margin:auto;
  padding:5px;
}
.info.good{
  border:1px solid #416d50;
  background-color: #47cf73;
  color:#416d50;
}

input{
  height:35px;
  padding: 5px 5px;
  margin: 10px 0px;
  background-color:#e0dada;
  border:none;
}
button{
  height:40px;
  padding: 5px 5px;
  margin: 10px 0px;
  font-weight:bold;
  background-color:#be5256;
  border:none;
  color:#e0dada;
  cursor:pointer;
  font-size:16px;
}
button:hover{
  background-color:#711f1b;
}

@-webkit-keyframes shake{
  from, to{
    -webkit-transform: translate3d(0, 0, 0);
    transform:translate3d(0,0,0);
  }
  10%,30%,50%,70%,90%{
    -webkit-transform: translate3d(-10px, 0, 0);
    transform:translate3d(-10px,0,0);
  }
  20%,40%,60%,80%{
    -webkit-transform: translate3d(10px, 0, 0);
    transform:translate(10px,0,0);
  }
}

.shake{
  animation-name: shake;
  animation-duration:3s;
  animation-fill-mode: both;
}

@media screen and (max-width: 780px) {
  section{
    width:90%;
  }
}
.button-2 {
  background-color: #46CEAD;
  /* box-shadow: 5px 10px #35BB9B; */
  padding: 10px;

}

</style>
