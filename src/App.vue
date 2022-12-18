<template>
  <div>
    <WithUkraine />
    <HeadName />
    <!-- <ViridianE text="viridian" /> -->
    <InfoBlock text="curriculum vitae:" :dataObject="history" :defaultShow="false" />
    <InfoBlock text="demo-pages (folio):" :dataObject="folio" :defaultShow="true" />
    <InfoBlock text="the stack:" :dataObject="toolkit" :defaultShow="false" />
    <InfoBlock
      text="inspired by:"
      :dataObject="inspired"
      :defaultShow="false"
    />
    <InfoBlock
      text="get in touch:"
      :dataObject="contacts"
      :defaultShow="true"
      extraStyles="contacts"
    />
    <h6>&copy; 2022 Vadym (vadym4che) Chervoniak</h6>
    <div v-show="false" class="audio">
    <audio id="open" autoplay controls>
      <source src="./assets/open-tab.wav" type="audio/wav">
    Your browser does not support the audio element.
    </audio>
    <audio id="close" controls>
      <source src="./assets/close-tab.wav" type="audio/wav">
    Your browser does not support the audio element.
    </audio>
  </div>
  </div>
</template>

<script>
import WithUkraine from "./components/WithUkraine.vue";
import HeadName from "./components/HeadName.vue";
import InfoBlock from "./components/InfoBlock.vue";
import data from "./assets/data.js";

export default {
  name: "App",
  components: {
    WithUkraine,
    HeadName,
    InfoBlock,
  },
  data() {
    return {
      toolkit: data.toolkit,
      folio: data.folio,
      history: data.history,
      contacts: data.contacts,
      inspired: data.inspired
    };
  },
  methods: {
    scroll() {
      var elem = document.getElementsByClassName("wrapper")[0]
      elem.style.setProperty('overflow-y', 'scroll')
      elem.scrollTop = elem.scrollHeight
    },
    audioPreload() {
      let openTab = document.getElementById('open')
        let closeTab = document.getElementById('close')
        openTab.preload = "auto"
        openTab.load()
        closeTab.preload = "auto"
        closeTab.load()
    }
  },
  mounted() {
    this.scroll()
    document.addEventListener('DOMContentLoaded', () => {
      this.audioPreload()

    })
  },
};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/alarm-clock');

* {
  --viridian: #408260;

  --font-hp: "HP Simplified Light";

  --ubuntu-orange: #e95420;
  --aubergine-light: #77216f;
  --aubergine-mid: #5e2750;
  --aubergine-dark: #2c001e;
  --grey-warm: #aea79f;
  --grey-cool: #333333;
  --grey-text: #111111;
  --aubergine: #772953;

  --vue-police-blue: #2c3e50;
  --vue-mint: #42b983;
  --vue-font: Avenir, Helvetica, Arial, sans-serif;
}

html * {
  scrollbar-color: rebeccapurple green !important;
  scrollbar-width: thin !important;
}
body {
  color: whitesmoke;
  font-family: var(--font-hp);
  background: linear-gradient(
    180deg,
    black 0%,
    black 14.2857%,
    navy 28.5714%,
    navy 42.8571%,
    gold 57.1428%,
    gold 71.4285%,
    black 85.7142%,
    black 100%
  );
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
a {
  font-size: 2.4vh;
  color: white;
  text-shadow: 0 0 1.5rem black;
  font-weight: 900;
  text-decoration-style: dashed;
}

h6 {
  z-index: -1;
  width: 100%;
  text-align: center;
  font-size: 10px;
  line-height: 10px;
  position: fixed;
}

@media (orientation: landscape) {

h6 {
  bottom: 1vh;
}

}

@media (orientation: portrait) {

h6 {
  bottom: 4vh;
}

.block:last-child {
  margin-bottom: 2vh;
}
}
</style>
