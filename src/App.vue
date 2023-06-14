<template>
  <div>
    <WithUkraine />
    <HeadName />
    <InfoBlock
      text="auto-biography-(č)oding"
      :dataObject="summary"
      :defaultShow="false"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="0"
      scrollColor="#ff000088"
    />
    <InfoBlock
      text="curriculum vitae:"
      :dataObject="stages"
      :defaultShow="false"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="1"
      scrollColor="#ffa50088"
    />
    <InfoBlock
      text="demo-pages (folio):"
      :dataObject="folio"
      :defaultShow="true"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="2"
      scrollColor="#ffff00cc"
    />
    <InfoBlock
      text="main languages:"
      :dataObject="languages"
      :defaultShow="false"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="3"
      scrollColor="#00ff00cc"
    />
    <InfoBlock
      text="main tech stack:"
      :dataObject="toolkit"
      :defaultShow="false"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="4"
      scrollColor="#00ffffcc"
    />
    <InfoBlock
      text="interested in:"
      :dataObject="interested"
      :defaultShow="false"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="5"
      scrollColor="#0000ffcc"
    />
    <InfoBlock
      text="inspired by:"
      :dataObject="inspired"
      :defaultShow="false"
      :openSound="openSound"
      :closeSound="closeSound"
      keyString="6"
      scrollColor="#ff00ffcc"
    />
    <InfoBlock
      text="get in touch:"
      :dataObject="contacts"
      :defaultShow="true"
      :openSound="openSound"
      :closeSound="closeSound"
      extraStyles="contacts"
      keyString="7"
      scrollColor="#ffffffcc"
    />
    <h6>&copy; 2022 Vadym (vadym4che) Chervoniak</h6>
    <div v-show="false" class="audio">
      <audio ref="openSound" autoplay controls>
        <source src="./assets/open-tab.wav" type="audio/wav">
      Your browser does not support the audio element.
      </audio>
      <audio ref="closeSound" controls>
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
      ...data
    };
  },
  methods: {
    audioPreload() {
      let openTab = this.$refs.openSound;
      let closeTab = this.$refs.closeSound;
      openTab.preload = "auto";
      openTab.load();
      closeTab.preload = "auto";
      closeTab.load();
    },
    openSound() {
      const openTab = this.$refs.openSound;
      openTab.play();
    },
    closeSound() {
      const closeTab = this.$refs.closeSound;
      closeTab.play();
    },
  },
  mounted() {
  },
};
</script>

<style>

@import url('https://fonts.cdnfonts.com/css/alarm-clock');

* {
  --viridian: #4c48;

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
  scroll-behavior: smooth;
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
  margin-left: -2ch;
}

@media (orientation: landscape) {

h6 {
  bottom: 1dvh;
}

}

@media (orientation: portrait) {

h6 {
  bottom: 1dvh;
}

.block:last-child {
  margin-bottom: 2vh;
}
}

</style>
