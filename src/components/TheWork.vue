<template>
    <div class="container">
        <h2>Work</h2>
        <div class="work">
            <h4>Experience</h4>
            <div class="ex-body">
                <div class="line"></div>
                <div class="line-point">
                    <div @mouseenter="(hideText = !hideText) && (textIdx = 0)"
                        @mouseleave="hideText = !hideText && (textIdx = 100)" class="dot" @click="open(0)"></div>

                    <div @mouseenter="(hideText = !hideText) && (textIdx = 1)"
                        @mouseleave="hideText = !hideText && (textIdx = 100)" class="dot" @click="open(1)"
                        style="margin-left: 35vw !important; margin-top:-21px  !important"></div>
                    <div @mouseenter="(hideText = !hideText) && (textIdx = 2)"
                        @mouseleave="hideText = !hideText && (textIdx = 100)" class="dot" @click="open(2)"
                        style="margin-left: 50vw !important; margin-top:-21px  !important"></div>
                    <div @mouseenter="(hideText = !hideText) && (textIdx = 3)"
                        @mouseleave="hideText = !hideText && (textIdx = 100)" class="dot" @click="open(3)"
                        style="margin-left: 63vw !important; margin-top:-21px  !important"></div>
                    <div @mouseenter="(hideText = !hideText) && (textIdx = 4)"
                        @mouseleave="hideText = !hideText && (textIdx = 100)" class="dot" @click="open(4)"
                        style="margin-left: 76vw !important; margin-top:-21px  !important"></div>
                    <div v-if="hideText && !isOpen" class="hide-text">{{pointTitle[textIdx]}}</div>
                    <app-work-point :class="classO" v-if="isOpen" :openPoint="currentPoint"></app-work-point>
                    <div v-else class="else-pad"></div>
                </div>
            </div>
        </div>
        <div class="projects">
            <h4>projects</h4>
            <div class="projects-list">

                <div>
                    <app-work-project></app-work-project>
                </div>

            </div>
        </div>
    </div>



</template>

<script>
import AppWorkPoint from './AppWorkPoint.vue';
import AppWorkProject from './AppWorkProject.vue';
export default {
    data() {
        return {
            currentPoint: 9,
            isOpen: false,
            classO: '',
            hideText: false,
            textIdx: 100,
            pointTitle: ['Education', 'Freelance', 'Front-end Developer', 'QA', 'Courses']
            
        }
    },
    methods: {
        open(val) {
            if (this.currentPoint === val) {
                this.currentPoint = val;
                this.classO = 'opacity-a';
                setTimeout(() => {
                    this.isOpen = false;
                    this.currentPoint = 9;
                }, 2000)
                
            } else {
                this.currentPoint = val,
                this.isOpen = true;
                this.classO = '';
                
                
                
            }
        }
    },
    mounted() {
       
    },
    components: {
        AppWorkPoint, AppWorkProject
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
$c: 'Comic Neue';

.hide-text{
    font-family: 'Roboto', sans-serif;
    padding-top: 20px;
    color: $shadow;
    position: absolute;
    width: 850px;
    margin: 0 auto;
}

.else-pad {
    height:100px;
}
.opacity-a {
    animation-name: opacity-a;
    animation-duration: 2s;

@keyframes opacity-a{

    from {
        opacity: 100%;
    } to {
        opacity: 0;
        display: hidden;
    }
}
}
</style>