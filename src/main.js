import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/css/app.css"
import { defineCustomElements as defineIonPhaser } from "@ion-phaser/core/loader"

defineIonPhaser(window)

const app = createApp(App)
  .use(store)
  .use(router)
  .mount("#app")


