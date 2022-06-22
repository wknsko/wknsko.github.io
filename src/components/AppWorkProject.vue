<template>
    <div class="mobile-arrows">
        <div @click="page('minus')" class="material-symbols-outlined ">
            chevron_left
        </div>
        <div @click="page('plus')" class=" material-symbols-outlined">
            chevron_right
        </div>
    </div>
    <div class="projects-list-body">

        <div @click="page('minus')" class="material-symbols-outlined web-arrow">
            chevron_left
        </div>
        <div class="project-item">
            <div class="info">
                <h5>{{projects[index].title}}</h5>
                <div class="project-tags">
                    <ul>
                        <li v-for="(item,i) in projects[index].tags" :key="i">{{item}}</li>

                    </ul>
                </div>
                <div class="project-body">{{ projects[index].text}}</div>
                <button class="git-link" @click="openLink(projects[index].gitlink)">Open git repository</button>
            </div>
            <div>
                <div class="img-container">
                    <div class="top">
                        <span class="img-dot"></span>

                        <span class="img-dot"></span>
                        <span class="img-dot"></span>
                        <span @click="openLink(projects[index].link)" class="open-btn">open</span>
                    </div>
                    <div class="img-content">
                        <img :src="getImg(projects[index].imgsrc)" />
                    </div>
                </div>
            </div>
        </div>
        <div @click="page('plus')" class=" web-arrow material-symbols-outlined">
            chevron_right
        </div>
    </div>

</template>

<script>
export default {
    inject: ['projects'],
    data() {
        return {
            index: 0,
            project: {},
            grid: ''
        }
    },
    methods: {
        openLink(link) {
            window.open(link, '_blank')
        },
        getImg(imgsrc) {
            return require('../assets/' + imgsrc)
        },
        page(symbol) {
            if (this.index === 0 && symbol === 'minus') {
                this.index = this.projects.length -1
            } else if (symbol === 'plus' && this.index === this.projects.length - 1) {
                this.index = 0;
            } else if (symbol === 'minus' ) {
                this.index--
            } else if (symbol === 'plus' ) {
                this.index++
            }
            
            
        }
        
    },
    computed: {
       
    },
    mounted(){
        
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

.info {
    height:300px
}

img-container {
    margin-left:50px;
}
</style>