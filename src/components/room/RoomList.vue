<template>
  <div class="row">
    <div class="col-md-12">
      <div class="page-header text-center">
        <h3>Rooms</h3>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th>Room</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <room-item
          v-for="room in rooms"
          :room="room"
          :key="room._id">
        </room-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import RoomItem from './RoomItem'

  export default {
    components: {RoomItem},
    data () {
      return {
        rooms: [
          {_id: '1', name: 'aaa'},
          {_id: '2', name: 'bbb'},
          {_id: '3', name: 'ccc'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
