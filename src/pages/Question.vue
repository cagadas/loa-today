<template>
  <q-page class="flex-center">
    <h6>Ask Us A Question!</h6>
    <p>Pick the co-host you want to answer your question live on the show.
      We will email you to let you know in which episode they answer it.</p>
    <p>&nbsp;</p>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md bkd"
    >
      <p style="color:black;">Who do you want to answer your question?</p>
      <div class="q-gutter-sm">
        <q-radio ref="subject" v-model="subject" val="Alyx" label="Alyx" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Ami" label="Ami" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Cindie" label="Cindie" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Daniel" label="Daniel" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="David" label="David" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Linda" label="Linda" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Louis" label="Louis" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Psychic Rita" label="Psychic Rita" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="The Stream" label="The Stream" /> &nbsp;&nbsp; 
        <q-radio ref="subject" v-model="subject" val="Walt" label="Walt" />
        <q-radio ref="subject" v-model="subject" val="General Contact" label="General Contact" />
      </div>
      
      <q-input
        v-model="name"
        ref="name"
        label="Your name *"
        hint="Tap above to enter your name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your name.']"
      />

      <q-input
        v-model="email"
        ref="email"
        label="Your email address *"
        hint="Tap above to enter your email address. We need a valid email address so we can write back to you!"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter a valid email address.']"
      />
      <br>

      <q-input
        class="bkd"
        rows="5"
        cols="34"
        filled
        type="textarea"
        v-model="message"
        ref="message"
        label="Your question *"
        hint="Enter your question in this box."
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your question'
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: "",
      email: "",
      message: "",
      subject: "General Contact"
    }
  },

  methods: {
    onSubmit () {
      axios
        .post('/forms/process-contact.php', {
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          subject: this.$refs.subject.value,
          message: this.$refs.message.value
        })
        .then(response=> {
          console.log(response.data)
        })
        .catch(function(error) {
          console.log("Contact Axios Error: ", error)
        })

        this.$q.notify("Your message has been sent!")
        window.location.href = "./index.html#/contacted"
        this.onReset()
    },

    onReset () {
      this.name = ""
      this.email = ""
      this.message = ""
    }
  }
}
</script>

<style scoped>
.bkd {
  background-color: beige;
  border: 1pt black solid;
}
p {
  text-indent: 0;
}
</style>