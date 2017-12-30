<template>
  <tr>
    <td>{{ room.name }}</td>
    <td>
      <button class="btn btn-success">Enter</button>
    </td>
  </tr>
</template>

<script>
  export default {
    props: ['room']
  }
</script>

<style scoped>

</style>
