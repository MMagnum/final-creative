<template>
  <div class="home">
    <h1>Blog Posts</h1>
    <hr>
    <div v-for="entry in entries" v-bind:key="entry._id">
      <div class="entry">
        <div class="post">
          <h2>{{entry.title}}</h2>
          <p>{{entry.entry}}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      entries: []
    }
  },
  created() {
    this.getEntries();
  },
  methods: {
    async getEntries() {
      try {
        let response = await axios.get("/api/write");
        this.entries = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>


<style scoped>

.home {
    font-size: 16px;
}

p {
  font-size: 1.5em;
}
  .post {
    background-color: white;
    border: solid 3px black;
    border-radius: 1rem;
    padding: 10px 10px 10px 10px;
    margin: 20px 2% 10px 2%;
    box-shadow: 2px 2px 5px rgba(0,0,0,.5);
  }
  
</style>