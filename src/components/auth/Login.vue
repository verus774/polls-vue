<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="page-header text-center">
        <h3>Login</h3>
      </div>
      <form role="form" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" class="form-control" v-model="username" required>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" class="form-control" v-model="password" required>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('login', {username: this.username, password: this.password})
        .then(() => this.$router.push('polls'))
    }
  }
}
</script>

<style scoped>

</style>
