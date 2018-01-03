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
  import {HTTP} from '../../http/http-common'

  export default {
    components: {RoomItem},
    data () {
      return {
        rooms: []
      }
    },
    methods: {
      loadData () {
        HTTP.get('rooms')
          .then(response => {
            this.rooms = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created () {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
