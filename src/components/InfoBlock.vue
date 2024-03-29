<template>
  <div class="block"
  :style="[
    extraStyles === 'contacts'
      ? { paddingBottom: '3vh' }
      : {},
  ]"
  >
    <div
      class="toggler"
      @click="toggle"
      :style="[
        toggleBool
          ? { background: 'whitesmoke', color: 'var(--viridian)',
          textShadow: '0 0 0.5vh var(--viridian)' }
          : { background: 'var(--viridian)',
          color: 'whitesmoke',
          textShadow: '0 0 0.5vh whitesmoke'},
      ]"
    >
      <span
        class="scroll-v-left"
        :class="[toggleBool ? 'mirrorVertSpan' : 'normalVertSpan']"
        :style="[
          !toggleBool
            ? { background: scrollColor, color: 'var(--viridian)',
            textShadow: '0 0 0.5vh var(--viridian)'}
            : { background: 'var(--viridian)', color: scrollColor,
            textShadow: '0 0 0.5vh whitesmoke' },
        ]"
        >V</span
      >
      <h5
        class="toggler-title"
        :style="[
          !toggleBool
            ? { textShadow: '0 0 4px ' + localScrollColor }
            : { textShadow: '0 0 4px ' + scrollColor },
        ]"
        @mouseover="applyTextShadow"
        @mouseout="resetTextShadow"
      >
        {{ text }}
      </h5>
      <span
        class="scroll-v-right"
        :class="[toggleBool ? 'mirrorVertSpan' : 'normalVertSpan']"
        :style="[
          !toggleBool
            ? { background: scrollColor,
                color: 'var(--viridian)' }
            : { background: 'var(--viridian)',
                color: scrollColor }
        ]"
        >V</span
      >
    </div>

    <ul
      @click="toggle"
      v-show="toggleBool"
      :class="[dataObject[0].link ? 'wrapper scrollable' : 'paragraphs scrollable',
      extraStyles === 'contacts' ? 'contacts' : extraStyles === 'demos' ? 'demos' : '']"
      :ref="refName"
    >
      <li
        v-for="(data, index) in dataObject"
        :key="index"
        :class="[dataObject[0].link ? 'wrapper_li' : 'paragraph_li', extraStyles === 'contacts' ? 'contacts_li' : extraStyles === 'demos' ? 'demos_li' : '' ]"
      >
        <a
          v-if="dataObject[index].link && dataObject[index].title"
          :href="data.link"
          :class="[extraStyles === 'contacts' ? 'contacts_a' : extraStyles === 'demos' ? 'demos_a' : '' ]"
        >
          <img
            v-if="dataObject[index].image"
            :src="data.image"
            :alt="data.title"
            :class="[extraStyles === 'contacts' ? 'contacts_img' : extraStyles === 'demos' ? 'demos_img' : '' ]"
          />
          {{ data.title }}
        </a>
        <p
          v-else
          :class="[text === 'auto-biography-(č)oding' ? 'italic' : '']"
        >
          {{ data.paragraph }}
        </p>
      </li>
    </ul>
    <div v-show="toggleBool" :class="['stick']"></div>
  </div>
</template>

<script>

export default {
  name: "InfoBlock",
  props: {
    text: String,
    dataObject: Object,
    defaultShow: Boolean,
    extraStyles: String,
    keyString: String,
    openSound: {
      type: Function,
      required: true
    },
    closeSound: {
      type: Function,
      required: true
    },
    scrollColor: String,
  },
  computed: {
    refName() {
      return 'info' + this.keyString;
    },
  },
  data() {
    return {
      toggleBool: false,
      keyNumber: Number(this.keyString),
      localScrollColor: this.scrollColor,
      soundCouldBePlayed: !this.defaultShow,
    }
  },
  methods: {
    handleOpenSound() {
      this.openSound();
    },
    handleCloseSound() {
      this.closeSound();
    },
    scroll() {
      const elem = document.getElementsByClassName('scrollable')[this.keyString];
      setTimeout(() => {
        elem.scrollTop = elem.scrollHeight;
      }, 0);

      if (this.soundCouldBePlayed) {
        this.handleOpenSound();
      }

      this.soundCouldBePlayed = true;
    },
    toggle() {
      if (this.toggleBool === true) {
        this.handleCloseSound();
      } else if (this.toggleBool === false) {
        this.scroll();
      }
      this.toggleBool = !this.toggleBool;

      return this.toggleBool;
    },
    applyTextShadow() {
      this.localScrollColor = this.scrollColor;
    },
    resetTextShadow() {
      this.localScrollColor = 'var(--viridian)';
    },
  },
  mounted() {
    if (this.defaultShow) {
      this.toggle();
    }
  },
}

</script>

<style scoped>

.scroll-v-left,
.scroll-v-right {
  width: 2.5vh;
  height: 2.5vh;
  clip-path: polygon(
    50% 0%,
    65% 15%,
    85% 15%,
    85% 30%,
    100% 50%,
    85% 70%,
    85% 85%,
    65% 85%,
    50% 100%,
    35% 85%,
    15% 85%,
    15% 70%,
    0% 50%,
    15% 30%,
    15% 15%,
    35% 15%
  );
}

.block {
  width: 96vw;
  margin: 0 1.5vw 0.75vh ;
  overflow: hidden;
}
.toggler {
  position: relative;
  background: var(--viridian);
  color: whitesmoke;
  cursor: pointer;
  font-weight: 700;
  border-radius: 1vh;
  padding: 0 1.2vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.toggler span {
  background: whitesmoke;
  color: var(--viridian);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.toggler-title {
  letter-spacing: 1vw;
}

.wrapper {
  width: 96%;
  margin: 0 2%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: rgba(64, 130, 96, 0.33);
  overflow-x: hidden;
  overflow-y: auto;
}

.overflowY_scroll {
  overflow-y: scroll;
}

.wrapper_li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px dashed var(--viridian);
}
.paragraphs {
  width: 96%;
  margin: 0 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(245, 245, 245, 0.5);
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.paragraph_li {
  width: 80%;
  margin-left: 10vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

li {
  margin: 0.75vh 2vw;
}

ul {
  margin-top: 2vh;
}

li:last-child {
  margin-bottom: 0;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.mirrorVertSpan {
  display: inline-block;
  -moz-transform: scale(1, -1);
  -webkit-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
.normalVertSpan {
  display: inline-block;
  -moz-transform: scale(1, 1);
  -webkit-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  transform: scale(1, 1);
}
.stick {
  z-index: 15;
  width: 98%;
  margin: 0 1%;
  height: 1vh;
  background: var(--viridian);
  border-radius: 0.5vh;
}

p {
  color: black;
  font-weight: 900;
  font-size: 1.5vmax;
}

.italic {
  font-style: italic;
}

.toggler:hover {
	-webkit-animation: shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@media (orientation: landscape) {

  .contacts li {
    height: 14.5vh;
  }
  .contacts a {
    font-size: 1rem;
  }

  .wrapper, .paragraphs {
    max-height: 39vh;
  }
  .wrapper_li {
    height: 18vh;
    width: auto;
    aspect-ratio: 9 / 5;
    min-width: 10vh;
  }

  .paragraph_li {
    width: auto;
    min-height: fit-content;
    height: auto;
  }

  .wrapper_li a > img {
    height: 10vh;
  }

  .wrapper_li a {
    height: 19vh;
  }

  img {
    max-width: 15.5vw;
  }

  .toggler {
    font-size: 2.5vh;
    line-height: 2.5vh;
  }

}

@media (orientation: portrait) {
  .contacts_li {
    height: 10vh;
  }
  .contacts_a {
    font-size: 1.2rem;
  }

  .contacts img {
    transform: scale(1.2);
  }
  .wrapper, .paragraphs {
    max-height: 35vh;
  }
  .wrapper_li a > img {
    height: 7vh;
  }

  .wrapper_li a {
    height: 15vh;
    line-height: 90%;
  }

  .wrapper_li {
    height: 16vh;
    width: 45%;
  }

  .paragraph_li {
    width: auto;
  }

  img {
    max-width: 100%;
  }

  .toggler-title {
    font-size: 2.5vh;
    line-height: 2.5vh;
    letter-spacing: 0.33vw;
  }

  .toggler {
    height: 3vh;
  }

  .scroll-v-left,
  .scroll-v-right {
    width: 3vh;
    height: 3vh;
    font-size: 2.5vh;
    line-height: 3vh;
  }
}

@media (resolution: 72dpi) {
  /* CSS rules for devices with 72dpi */
  /* For example, you can apply specific styles or layouts */
  .contacts_a {
    font-size: 0.66rem;
  }

  .italic {
    letter-spacing: -0.25ch;
  }

}


@media (max-width: 640px) {
  /* CSS rules for devices with 72dpi */
  /* For example, you can apply specific styles or layouts */
  .contacts_a {
    font-size: 0.66rem;
  }

  .italic {
    letter-spacing: -0.15ch;
  }
}

@media (max-width: 540px) {
  .toggler-title {
    font-size: 100%;
    line-height: 150%;
  }
}

.contacts {
  padding: 0;
  justify-content: center;
  flex-wrap: nowrap;
}
.contacts_li {
  max-width: 20%;
  height: 10dvh;
}
.contacts_a {
  text-decoration-line: none;
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.demos {}
.demos_li {}
.demos_a {
  position: relative;
  align-items: center;
  justify-content: center;
  line-height: 250% !important;
  z-index: 0;
}

.demos_img {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 16vh !important;
}

@media (orientation: portrait) {
  .demos_img {
    height: 16vh !important;
  }

  .contacts_li {
    margin: 2%;
  }
}

@media (orientation: landscape) {
  .demos_img {
    height: 18vh !important;
  }

  .contacts {
    height: 19dvh;
  }

  .contacts_li {
    margin: 1%;
  }
}

@-webkit-keyframes shadow-inset-center {
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }
}

@keyframes shadow-inset-center {
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }
}

</style>
