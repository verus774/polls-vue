<template>
  <tr>
    <td>{{ poll.title }}</td>
    <td>
      <div class="btn-group">
        <button class="btn btn-success" title="Start">
          <span class="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
        <button class="btn btn-primary" title="Stop">
          <span class="glyphicon glyphicon-stop" aria-hidden="true"></span>
        </button>
        <a class="btn btn-warning" title="Edit">
          <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </a>
        <button class="btn btn-danger" title="Remove">
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
      </div>
    </td>
  </tr>

</template>

<script>
export default {
  props: ['poll']
}
</script>

<style scoped>

</style>
