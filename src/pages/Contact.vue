<template>
  <q-page class="flex-center">
    <h6>Send A Comment, Topic, Or Suggestion!</h6>
    <p>Want to just give us some feedback on an episode or suggest a topic for a future episode?
      Or maybe you just want to tell us what you've been thinking about. Use this form to send it to us.</p>
    <p>&nbsp;</p>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md bkd"
    >
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
        hint="Tap above to enter your email address. We need a valid email address in case we need to write back to you!"
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
        label="Your message *"
        hint="Enter your message in this box."
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your message'
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
      message: ""
    }
  },

  methods: {
    onSubmit () {
      axios
        .post('/forms/process-contact.php', {
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          subject: "LOA Today App Contact",
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
</style>