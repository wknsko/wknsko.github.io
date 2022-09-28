<template>
  <header>
    <div style="animation: fadein 3s linear forwards; 
                animation-delay: 1s;
                opacity: 0;
                display:block;">Scroll for more info</div>
  </header>
  <card></card>
  <div style="animation: fadein 3s linear forwards; 
                animation-delay: 1.3s;
                opacity: 0;
                display:block;" class="arrow-down"> >>> </div>
  <about></about>
  <experience></experience>
  <projects></projects>

  <div v-if="clicked" class="blocker" @click="hideClick()"></div>
  <div v-if="clicked" class="cv-window">
    <div class="cv-text">What language do you prefer?</div>
    <div class="cv-lang">
      <div class="eng">English</div>
      <div class="cz">Czech</div>
    </div>
  </div>
  <footer>
    
    <div class="top" @click="click()">Take a look at my resume!</div>
    <div class="bottom">
    <div class="left">wknsko@gmail.com</div>
    <div class="right">+420 732121295</div>
    </div>
  </footer>
  
 
</template>

<script>
import Card from './components/Card.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue'
import {ref} from 'vue';
export default {
  setup() {
    
    const clicked = ref(false);
    const click = () => {
      clicked.value = true
    };
    const hideClick = () => {
      clicked.value = false
    };
    return {
      clicked,
      click, hideClick
    }
  },
  components: {
    Card, About, Experience, Projects
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* colors */
$darkest: #464646;
$white: #EFEFEF;
$darker-white: #d2d2d2;
$greyish: #9e9e9e;
$dark-greyish: #696969;
$black: #333;
$blackerblack: #1a1a1a;
$stroke: #1a1a1a;


/* fonts */
$open: 'Open Sans',
sans-serif;
$sans: 'PT Sans',
sans-serif;
$mono: 'PT Mono',
sans-serif;

/* animations */

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(4deg);
  }

  75% {
    transform: rotate(-4deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes fadeout {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}



html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

body::-webkit-scrollbar {
  width:0;
  height:0;
}

header {
  padding: 20px;
  text-align:center;
  color: $dark-greyish;
  text-transform: uppercase;
  font-family: $mono;
  
}
.arrow-down {
  text-align: center;
  transform: rotate(90deg);
  margin-top: 85vh;
  color: $dark-greyish;
}

footer {
  .top {
    position: relative;
    text-align: center;
    padding: 9px 0;
    cursor: pointer;
    background-color: #1a1a1a;
      text-decoration: none;
      color: $greyish;
      font-family: $open;
      &:hover {
        opacity:0.6;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 2px;
        text-decoration-color: $white;
      }
    }
  }

.bottom {
  display: flex;
  background-color: #181717;
  color: $dark-greyish;
  font-family: $mono;
  padding: 2vh 4vw; 
  
  .left {
    margin-right: auto;
    margin-left:10vw;
  }
   .right {
    margin-right:10vw;
   }
}
/*.cv-window>.cv-text>.cv-lang>.eng+.cz */

.cv-window{
  margin: 0;
  padding: 50px;
  width: 70vw;
  max-width: 500px;
  background-color: $darker-white;
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  .cv-text {
    color: $dark-greyish;
    font-family: $open;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .cv-lang {
    display: inline-flex;
    font-family: $mono;
    color: $darkest;
    div {
      border: 0.13rem solid $dark-greyish;
      padding: 7px 16px;
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 1;
      }
    }
    .eng {
      margin-right: 10px;
    }
  }
}

.blocker {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: ' ';
  background: rgba(0, 0, 0, .2);
}
</style>
