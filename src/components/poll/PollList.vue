<template>
  <div class="row">
    <div class="col-md-12">
      <div class="page-header text-center">
        <h3>Polls</h3>
      </div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>Title</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <poll-item
          v-for="poll in polls"
          :poll="poll"
          :key="poll._id">
        </poll-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import PollItem from './PollItem'
  import {HTTP} from '../../http/http-common'

  export default {
    components: {PollItem},
    data () {
      return {
        polls: []
      }
    },
    methods: {
      loadData () {
        HTTP.get('polls')
          .then(res => {
            this.polls = res.data.data
          })
          .catch(err => {
            console.log(err)
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
