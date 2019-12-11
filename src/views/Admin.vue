<template>
<div id="create">
  <h1>Create a post</h1>
  <form v-if="creating" @submit.prevent="addEntry">
    <input v-model="addedTitle" placeholder="Title">
    <p></p>
    <textarea v-model="addedEntry"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for submitting a Entry! It should be uploaded now.</p>
    <p><a @click="toggleForm" href="#">Submit another Entry</a></p>
  </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: '#create',
  data() {
    return {
      creating: true,
      addedTitle: '',
      addedEntry: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async addEntry() {
      try {
        await axios.post("/api/write", {
          title: this.addedTitle,
          entry: this.addedEntry
        });
        this.addedTitle = "";
        this.addedEntry = "";
        this.creating = false;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>