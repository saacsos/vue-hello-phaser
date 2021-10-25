<template>
  <div class="flex justify-center">
    <ion-phaser v-bind:game.prop="game" v-bind:initialize.prop="initialize" />
  </div>
</template>

<script>
import Phaser from "phaser"
import DataStore from "@/store/DataStore"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      initialize: true,
      game: {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#202020")
            // let { width, height } = this.sys.game.canvas
            // let { width, height } = [40, 120]
            this.message = DataStore.getters.message
          },
          create() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "msg" + this.message,
              { font: "24px Monospace", fill: "#ffffff" }
            )
            this.helloWorld.setOrigin(0.5)
          },
          update() {
            // this.helloWorld.angle += 1
          },
          preload() {
            // this.canvas = this.sys.game.canvas
          },
        },
      },
    }
  },
  methods: {
    initializeGame() {
      this.initialize = true
    },
  },
  mounted() {
    DataStore.commit('setMessage', this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
