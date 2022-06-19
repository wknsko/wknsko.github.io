<template>
  <the-header @name="show"></the-header>
  <the-message v-if="showed === 'ak'"></the-message>
  <the-about v-if="showed === 'about'"></the-about>
  <the-work v-if="showed === 'work'"></the-work>
  <the-contact v-if="showed === 'contact'"></the-contact>
  
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import TheMessage from './components/TheMessage.vue';
import TheAbout from './components/TheAbout.vue';
import TheWork from './components/TheWork.vue';
import TheContact from './components/TheContact.vue'


export default {
  data() {
    return {
      showed: 'ak',
      
      
    }
  }, methods: {
    show(value) {
      this.showed = value;
     
    },
    open(val) {
      if(this.currentPoint === val){
        this.isOpen = false;
        this.currentPoint = 9;
      } else {
      this.currentPoint = val,
      this.isOpen = true;
      
      }
    }

  },
  created() {
    
  },
 components: {
  TheHeader, TheMessage, TheAbout, TheWork, TheContact
 }
}
</script>

<style lang="scss">
$stroke: #3c4043;
$shadow: #6B9080;
$body: #F6FFF8;
$med: #A4C3B2;
$light: #EAF4F4;
$r: 'Roboto';
$o: 'Alfa Slab One';


</style>
