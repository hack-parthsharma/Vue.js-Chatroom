<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name:null,
      feedback:null
      
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        // the "name" variable in the params overhere has to be the same as the recieving end
        this.$router.push({name:"Chat" , params: {name: this.name}})

      }else{
        this.feedback = "Please Enter a Name: "

      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}
</style>
