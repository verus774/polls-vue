<template>
  <div>
    <navigation></navigation>
    <div id="app" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {Navigation}
}
</script>

<style>

</style>
