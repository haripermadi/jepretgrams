<template>
<div>
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">JepretGrams</a>
  <form class="form-inline">
    <div>
      <button v-if="userId ==null" type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal">
      Log In
    </button>
    </div>
    <div>
      <button v-if="userId ==null" type="button" class="btn btn-primary" data-toggle="modal" data-target="#signupModal">
      Sign Up
    </button>
    </div>
    <div>
      <button v-if="userId !=null" type="button" class="btn btn-primary" @click="logOutButton">
      Log out
    </button>
    </div>
  </form>
</nav>
<!-- modal login -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Log In</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="user.password">
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="loginButton">Login</button>
      </div>
    </div>
    </div>
  </div>
  <!-- modal signup -->
<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Sign Up</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" class="form-control" placeholder="Enter your name" v-model="newuser.name">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" v-model="newuser.email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="newuser.password">
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="signupButton">Sign Up</button>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      newuser: {
        name: '',
        email: '',
        password: ''
      },
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    }
  },
  methods: {
    loginButton: function () {
      console.log('login user===', this.user)
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: this.user
      }).then(function (response) {
        console.log('resLogin', response.data)
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('userId', response.data.data.id)
        // location.reload()
      }).catch(function (error) {
        alert('wrong email/password')
        console.log(error)
      })
    },
    signupButton: function () {
      console.log('ini masuk sign up===', this.newuser)
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signup',
        data: this.newuser
      }).then(function (response) {
        console.log('resLogin', JSON.stringify(response))
        // location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    },
    logOutButton: function () {
      localStorage.clear()
      location.reload()
    }
  }

}
</script>

<style>

</style>
