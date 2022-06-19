<template>
    <div class="header">
        <div class="icon">
            <p @click="show('ak')" class="stroke-shadow">AK</p>
        </div>
        <div class="right">
            <ul>
                <li @click="show('about')"><span class="number">01</span><span :class="textClass">About</span></li>
                <li @click="show('work')"><span class="number">02</span><span :class="textClass">Work</span></li>
                <li @click="show('contact')"><span class="number">03</span><span :class="textClass">Contact</span></li>
            </ul>
            <button class="button resume">Resume/CV</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           textClass: 'text-none'
            
        }
    },
    methods: {
        show(value) {
            
            this.$emit('name', value);
        }
    },
    mounted() {
       
    }

}
</script>

<style lang="scss">


</style>