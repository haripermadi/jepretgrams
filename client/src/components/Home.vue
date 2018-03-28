<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">JepretGrams</h1>
        <p class="lead">Post-Like-Share</p>
      </div>
    </div>
    <div>
      <div>
      <button v-if="userId !=null" type="button" class="btn btn-primary" data-toggle="modal" data-target="#addpostModal">
      Add New Post
    </button>
    </div>
      <h1>Post grams</h1>
    </div>
    <div class="container">
      <div class="card mb-3" v-for="(photo, i) in photos" :key="i">
        <img class="card-img-top" :src="photo.image" alt="image">
        <div class="card-body">
          <h5 class="card-title">{{photo.caption}}</h5>
          <p class="card-text"><small class="text-muted">Upload time: {{photo.createdAt}}</small></p>
        </div>
        <div class="card-footer">
          <button v-if="userId !=null" type="button" class="btn btn-success" data-toggle="modal" data-target="#addpostModal">Edit</button>
          <button v-if="userId !=null" type="button" class="btn btn-danger" @click="deletePost(photo._id)">Delete</button>
        </div>
      </div>
    </div>
     <!-- modal post -->
  <div class="modal fade" id="addpostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            <label for="exampleInputEmail1">Caption</label>
            <input type="text" class="form-control" placeholder="Enter your name" v-model="newpost.caption">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Image</label>
            <input type="text" class="form-control" placeholder="Enter email" v-model="newpost.image">
          </div>
        </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addPost">Post</button>
        </div>
      </div>
      </div>
  </div>
    <!-- modal edit -->
  <div class="modal fade" id="addpostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            <label for="exampleInputEmail1">Caption</label>
            <input type="text" class="form-control" placeholder="Enter your name" v-model="newpost.caption">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Image</label>
            <input type="text" class="form-control" placeholder="Enter email" v-model="newpost.image">
          </div>
        </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addPost">Post</button>
        </div>
      </div>
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      photos: [],
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      newpost: {
        caption: '',
        image: ''
      }
    }
  },
  created: function () {
    this.getPhotos()
  },
  methods: {
    getPhotos: function () {
      let self = this
      axios({
        method: 'get',
        url: 'http://localhost:3000/photo'
      }).then(function (response) {
        console.log('get', response)
        self.photos = response.data.listPhoto.reverse()
      }).catch(function (error) {
        console.log(error)
      })
    },
    addPost: function () {
      alert('Add new post?')
      axios({
        method: 'post',
        url: 'http://localhost:3000/photo',
        data: this.newpost
      }).then(function (response) {
        console.log('add', response.data)
        location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    },
    deletePost: function (id) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/photo/${id}`,
        headers: {
          token: this.token
        }
      }).then(function (response) {
        console.log('delete', response.data)
        location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    },
    editPhoto: function (id) {
      axios({
        method: 'put',
        url: `http://localhost:3000/photo/${id}`,
        headers: {
          token: this.token
        }
      }).then(function (response) {
        console.log('edit', response.data)
        // location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
  // computed: {
  //   photos: function () {
  //     return this.$store.getters.getPhotos
  //   }
  // }

}
</script>

<style>

</style>
