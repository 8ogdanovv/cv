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
      extraStyles === 'contacts' ? 'contacts' : '']"
      :ref="refName"
    >
      <li
        v-for="(data, index) in dataObject"
        :key="index"
        :class="[dataObject[0].link ? 'wrapper_li' : 'paragraph_li']"
        :style="[
          extraStyles === 'contacts'
            ? {
                justifyContent: 'space-between',
                border: 'none',
                width: '25%',
                margin: '1vh',
              }
            : { justifyContent: 'space-between' },
        ]"
      >
        <a
          v-if="dataObject[index].link && dataObject[index].title"
          :href="data.link"
        >
          <img
            v-if="dataObject[index].image"
            :src="data.image"
            :alt="data.title"
            :style="[
              extraStyles !== 'contacts'
                ? { height: '11.5vh', width: 'auto' }
                : {},
            ]"
          />
          {{ data.title }}
        </a>
        <p v-else>
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
    };
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
      this.handleOpenSound();
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
      this.$nextTick(() => {
        const list = this.$refs[`info${this.keyString}`];
        if (list) {
          list.click();
        }
      });
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

@media (orientation: portrait) {

  .contacts li {
    height: 12vh;
  }
  .contacts img {
    transform: scale(0.5);
  }
  .contacts a {
    font-size: 1rem;
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
    max-width: 15vw;
  }

}

.contacts img {
  width: auto;
}

.contacts a {
  text-decoration-line: none;
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
  font-size: 2.5vh;
  line-height: 2.5vh;
  font-weight: 900;
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
  font-size: 90%;
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
  font-size: 1.5vh;
}

.toggler:hover {
	-webkit-animation: shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
