<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">
          <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
          Student polls
        </router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/login" active-class="active" exact><a>Login</a></router-link>
          <router-link tag="li" to="/polls" active-class="active" exact><a>Polls</a></router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
