import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import VueSocketIO from 'vue-3-socket.io'
import { io } from 'socket.io-client';

const socket = io('http://localhost:4113');


import './assets/main.css'


const app = createApp(App)
app.mount('#app')
app.use(new VueSocketIO({
    debug: true,
    connection: socket, //options object is Optional
}));
