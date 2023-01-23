<script setup>
import TextBox from "@/components/TextBox.vue";
import SubmitBtn from "@/components/SubmitBtn.vue";
</script>

<template>
  <main>
    <TextBox @text-changed="(text) => textBoxMessage = parseFloat(text)"/>
    <p>Value to be submitted: {{ textBoxMessage }}</p>
    <SubmitBtn @clicked="setMotorSpeed(textBoxMessage)"/>
  </main>
</template>


<script>
export default {
  data() {
    return {
      isConnected: false,
      socketMessage: '',
      textBoxMessage: 0.0
    }
  },

  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data
    },
    acknowledged(message) {
      console.log("server acknowledged: ", message)
    }
  },

  methods: {
    setMotorSpeed(motorSpeed) {
      if (!isNaN(motorSpeed) && motorSpeed < 1 && motorSpeed > 0) {
        console.log("Sending", motorSpeed, "to server")
        this.$socket.emit('setMotorSpeed', motorSpeed)
      }
      else
        console.log("Enter number between 0 and 1")
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
