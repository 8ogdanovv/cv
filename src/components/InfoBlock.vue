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
        :class="[toggleBool ? 'mirrorVertSpan' : 'normalVertSpan']"
        :style="[
          !toggleBool
            ? { background: 'whitesmoke', color: 'var(--viridian)',
            textShadow: '0 0 0.5vh var(--viridian)'}
            : { background: 'var(--viridian)', color: 'whitesmoke',
            textShadow: '0 0 0.5vh whitesmoke' },
        ]"
        >V</span
      >{{ text }}

      <span
        :class="[toggleBool ? 'mirrorVertSpan' : 'normalVertSpan']"
        :style="[
          !toggleBool
            ? { background: 'whitesmoke', color: 'var(--viridian)' }
            : { background: 'var(--viridian)', color: 'whitesmoke' },
        ]"
        >V</span
      >
    </div>

    <ul
      @dblclick="toggle"
      v-show="toggleBool"
      :class="[dataObject[0].link ? 'wrapper' : 'paragraphs',
      extraStyles === 'contacts' ? 'contacts' : '']"
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
    
  },
  data() {
    return {
      toggleBool: this.$props.defaultShow,
    };
  },
  methods: {
    toggle() {
        if (this.toggleBool === true) {
            this.closeSound()
        } else if (this.toggleBool === false) {
            this.openSound()
        }
      return (this.toggleBool = !this.toggleBool);
    },
    openSound() {
        let openTab = document.getElementById('open')
        openTab.play()
    },
    closeSound() {
        let closeTab = document.getElementById('close')
        closeTab.play()
    }

  },
  mounted() {
  },
}

</script>

<style scoped>

@media (orientation: portrait) {

  .contacts li {
    height: 12vh;
  }
  .contacts img {
    transform: scale(0.5);
  }
  .contacts a {
    font-size: 0.75rem;
  }
  .wrapper {
    max-height: 37vh;
  }
  .wrapper_li a > img {
    height: 8vh;
  }

  .wrapper_li a {
    height: 17vh;
  }

  .wrapper_li {
    height: 16vh;
    width: 45%;
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

  .wrapper {
    max-height: 40vh;
  }
  .wrapper_li {
    height: 18vh;
    width: auto;
    aspect-ratio: 9 / 5;
    min-width: 10vh;
  }

  .wrapper_li a > img {
    height: 10vh;
  }
  
  .wrapper_li a {
    height: 19vh;
  }

  img {
    max-width: '15vw'; 
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
  font-size: 2vh;
  font-weight: 900;
  letter-spacing: 1vw;
  border-radius: 1vh;
  padding-left: 1vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.toggler span {
  background: whitesmoke;
  color: var(--viridian);
  display: flex;
  margin-left: 1vw;
  margin-right: 2vw;
  padding-left: 1vw;
  justify-content: center;
  align-items: center;
  width: 3vw;
  font-size: 2.5vh;
  line-height: 2vh;
  text-align: center;
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
  justify-content: space-around;
  background: rgb(245, 245, 245, 0.5);
  max-height: auto;
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
  font-size: 2vh;
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
<!-- :style="[ paragraphs ? { maxHeight: 'auto', overflowY : 'scroll' } : { maxheight: '42.5vh', overflowY: 'scroll' }]" -->