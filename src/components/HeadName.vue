<template>
  <div class="main">
      <div class="top">
      <h2>
        <span class="vadym">
          <b>Vadym</b>
        </span>

        <span class="che">
          <b>Chervoniak</b>
        </span>
      </h2>

      <h3>
        <span>w</span>
        <span>w</span>
        <span>w</span>
        <span>-</span>
        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </h3>
    </div> 

    <div class="photo">
      <img src="../assets/photo720.jpg" alt="photo" />
    </div>
  </div>
</template>

<style scoped>

h3 span {

  position: relative;
  z-index: 0;
  display: inline-block;
  animation: bounce 0.66s ease infinite alternate;

  color: #fff;
  text-shadow:
    0 1px 0 green,
    0 2px 0 green,
    0 3px 0 green,
    0 4px 0 green,
    0 5px 0 green,
    0 6px 0 transparent,
    0 7px 0 transparent,
    0 8px 0 transparent,
    0 9px 0 transparent,
    0 10px 10px rgba(0, 0, 0, 0.4);
}

h3 span:nth-child(2) {
  animation-delay: .1s;
}

h3 span:nth-child(3) {
  animation-delay: .2s;
}

h3 span:nth-child(4) {
  animation-delay: .3s;
}

h3 span:nth-child(5) {
  animation-delay: .4s;
}

h3 span:nth-child(6) {
  animation-delay: .5s;
}

h3 span:nth-child(7) {
  animation-delay: .6s;
}

h3 span:nth-child(8) {
  animation-delay: .7s;
}

h3 span:nth-child(9) {
  animation-delay: .8s;
}

h3 span:nth-child(10) {
  animation-delay: .9s;
}

h3 span:nth-child(11) {
  animation-delay: 1s;
}

h3 span:nth-child(12) {
  animation-delay: 1.1s;
}

h3 span:nth-child(13) {
  animation-delay: 1.2s;
}

@keyframes bounce {
  100% {
      top: -2vh;
      text-shadow: 0 1px 0 #CCC,
          0 2px 0 #CCC,
          0 3px 0 #CCC,
          0 4px 0 #CCC,
          0 5px 0 #CCC,
          0 6px 0 #CCC,
          0 7px 0 #CCC,
          0 8px 0 #CCC,
          0 9px 0 #CCC,
          0 50px 25px rgba(0, 0, 0, 0.2);
  }
}
.main {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

@media (orientation: portrait) {

  .main {
    height: 12vh;
  }

  h2 {
    line-height: 2.5rem;
    font-size: 2.5rem;
    width: 50vw;
    height: 33%;
    flex-direction: column;
  }

  h3 {
    height: 4vh;
    margin-top: -1vh;
    padding-bottom: 2.5vh;
  }

  h3 span {
    margin: auto 1vw;
    top: 2vh;
    font-size: 4vh;
  }
}

@media (orientation: landscape) {

  .main {
    height: 6vh;
  }

  h3 {
    height: 4vh;
    position: fixed;
    bottom: 3.2vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 span {
    margin: auto 1vw;
    top: 2vh;
    font-size: 4vh;
  }

  h2 {
    font-size: 3rem;
    line-height: 6.5vh;
    align-items: center;
    justify-content: space-around;
    width: 75vw;
  }

}

h2 {
  letter-spacing: 0.2rem;
  font-stretch: ultra-expanded;
  font-weight: 900;
  text-transform: uppercase;
  text-align: left;
  background: -webkit-linear-gradient(
    0deg,
    var(--aubergine-dark),
    var(--ubuntu-orange)
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-wrap: normal;
  position: relative;
  display: flex;
}

h2 .vadym {
  display: block;
  background: -webkit-linear-gradient(
    90deg,
    var(--ubuntu-orange),
    var(--aubergine-dark) 
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.5;

}

h2 .che {
  display: block;
  background: -webkit-linear-gradient(
    270deg,
    var(--ubuntu-orange),
    var(--aubergine-dark)
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.5;
}

p {
  width: 100%;
  text-align: left;
  line-height: 4vh;
  font-size: 4vh;
  font-weight: 900;
  letter-spacing: 3vw;
  display: block;
  text-shadow: 0 0 1vw whitesmoke;
  z-index: 5;
}
.photo img {
  z-index: 5;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  position: absolute;
  right: 1vh;
}
.photo {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 66%;
  width: 12vh;
  height: 12vh;
  background: rgba(64, 130, 96, 0.66);
  border-radius: 2.5vh;
  overflow: visible;
}
.photo::before {
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 12vh;
  height: 12vh;
  background:  rgba(255, 255, 255, 0.33);
  border-radius: 2.5vh;
  rotate: 45deg;
}

@media screen and (min-width: 960px) and (orientation: landscape) {
  h2, h2::after {
    letter-spacing: 1.175vw;
  }

  .photo {
    left: 75dvw;
  }
}

@media (orientation: portrait) {
  h2, h2::after {
    font-size: 4dvh;
    line-height: 5dvh;
    letter-spacing: 1.175vw;
    margin-bottom: -4dvh;
  }

  h3 span {
    margin: auto 0.3rem;
  }
}

@media (max-width: 845px) {
  h3 span {
    margin: auto 0.3rem;
  }
}

@media (max-width: 720px) {
  h3 span {
    margin: auto 0.2rem;
  }
}

@media (max-height: 637px) {
  h2, h2::after {
    font-size: 2rem;
    line-height: 2rem;
  }
  h3 span {
    margin: auto 0.1rem;
  }
}

@media (max-width: 540px) {
  h3 span {
    margin: 0;
  }
}

@media (max-width: 468px) {
  h2, h2::after {
    letter-spacing: 0;
  }
}

@media (max-width: 408px) {
  h2, h2::after {
    font-size: 2rem;
    line-height: 2rem;
  }
}

</style>
