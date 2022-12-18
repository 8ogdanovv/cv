<template>
  <div id="withUkraine">
    <div id="time">dd/mm/yyyy hh:mm:ss</div>
    <p>Stand With <span>Ukraine</span></p>
    <div id="flag">
      <div id="navy">navy</div>
      <div id="gold">gold</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WithUkraine",
  data() {
    return {}
  },
  methods: {
    clock() {
      const timeOpt = {}
      let time = new Date().toLocaleString("nl-BE", timeOpt)
      document.getElementById("time").innerText = time
    },
  },

  mounted() {
    setInterval(this.clock, 1000)
  },
};
</script>

<style scoped>

@media (orientation: landscape) {

p, p span {

    font-size: 4vh;
  }
}

@media (orientation: portrait) {
    p, p span {
      font-size: 2.5vh;
}
}

#withUkraine {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 5vh;
  background: black;
  color: whitesmoke;
}
#flag {
  height: 4vh;
  display: flex;
  flex-direction: column;
  aspect-ratio: 3 / 2;
}
#gold {
  height: 2vh;
  background: gold;
  color: gold;
  font-size: 1vh;
}
#navy {
  height: 2vh;
  background: navy;
  color: navy;
  font-size: 1vh;
}
#time {
  font-family: 'alarm clock', sans-serif;
  font-size: 3vw;
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  text-shadow: 0 0 1vw whitesmoke;
  opacity: 0.8;
  letter-spacing: 0.1vw;
}

p {
    margin: 0 1vw;
    color: var(--grey-warm);
    font-weight: 500;
    opacity: 0.95;
}

p span {
    font-weight: 900;
    background: -webkit-linear-gradient(270deg,navy 25%,gold);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>
