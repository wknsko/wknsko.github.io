<template>
<div class="projects">
    <div data-aos="fade-in" data-aos-duration="2500" class="title">Few project examples</div>
    <div data-aos="fade-in" data-aos-duration="2500" class="arrows">
        <div @click="prevIndex()" class="left" > &lt; </div>
        <div class="link"> <a href="https://github.com/wknsko" target="_blank">more on github</a></div>
        <div class="right" @click="nextIndex()"> &gt; </div>
    </div>
    <div data-aos="zoom-in-up" data-aos-duration="2000"
     class="project" >
        <div class="project-body">
            
            <div class="project-title">{{projects[visibleIndex].title}}</div>
            <div class="project-tags">
                <ul>
                    <li v-for="tag in projects[visibleIndex].tags" :key="tag">{{tag}}</li>
                </ul>
            </div>
            <div class="project-text">{{projects[visibleIndex].text}}</div>
            <div class="project-pic">

                <div class="top">
                    <span class="img-dot"></span>
                    <span class="img-dot"></span>
                    <span class="img-dot"></span>
                    <span class="open-btn" @click="openLink(projects[visibleIndex].link)">open</span>
                </div>
                <div class="pic-body">
                    <img :src="require('../assets/' + projects[visibleIndex].imgsrc)" />
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const visibleIndex = ref(0);
        const projectOne = {
            title: 'Systack',
            tags: ['HTML', 'Vue.js', 'Sass'],
            text: 'Landing webpage for furniture brand made with Vue.js and Sass',
            imgsrc: 'systack-furniture.png',
            link: 'https://github.com/wknsko/systack-furniture'
        };
        const projectTwo = {
            title: 'Under Sun',
            tags: ['HTML', 'Vue.js', 'CSS'],
            text: 'Frontend for small sunglasses company website',
            imgsrc: 'under-sun.png',
            link: 'https://github.com/wknsko/under-sun/'
        };
        const projectThree = {
            title: 'Enginen Restaurant',
            tags: ['HTML', 'Vue.js', 'CSS'],
            text: 'Frontend website for restaurant with menu & booking',
            imgsrc: 'enginen-restaurant.png',
            link: 'https://github.com/wknsko/enginen-restaurant/'
        };
        const projectFour = {
            title: 'Melia Hotel',
            tags: ['HTML', 'Vue.js', 'CSS'],
            text: 'Landing web page for hotel',
            imgsrc: 'melia-hotel.png',
            link: 'https://github.com/wknsko/melia-hotel'
        };
        const projects = [projectOne, projectTwo, projectThree, projectFour];
        const openLink = (link) => {
            window.open(link, '_blank')
        };
        const prevIndex = () => {
            
            if (visibleIndex.value === 0) {
                visibleIndex.value = projects.length - 1;
            } else {
                visibleIndex.value--
            }
        };

        const nextIndex = () => {
            visibleIndex.value++
            if (visibleIndex.value === projects.length) {
                visibleIndex.value = 0;
            } 
        };

        return {
            visibleIndex, projects,
            openLink, prevIndex, nextIndex
        }
    },
    

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* colors */
$darkest: #464646;
$white: #EFEFEF;
$darker-white: #c2c2c2;
$greyish: #c9c9c9;
$dark-greyish: #8C8C8C;
$black: #333;
$blackerblack: #1a1a1a;

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

img {
    max-width: 500px;
}

.projects {
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
}

.arrows {
    display: flex;
    margin-bottom: 40px;
    align-items: center;
}

.arrows .left,
.arrows .right {
    font-size: 45px;
    margin: 0 20vw;
    width: auto;
    margin: 0 auto;
    font-family: $mono;
    color: $blackerblack;
    cursor: pointer;
}

.project-body {
    width: 80vw;
    max-width: 400px;
    margin: 0 auto;
}

.link {
   
    text-align: center;
    a {
    color: $blackerblack;
    font-size: 16px;
    font-family: $mono;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: -1px;
     &:hover {
        color: $dark-greyish;
     }
     &:active {
        color: $blackerblack;
        opacity: 0.9;
     }
    }
}

.project-title {
    font-size: 40px;
    font-family: $open;
    font-weight: 600;
    color: $white;
}

.project-tags {

    ul {
        margin-left: -40px;
        list-style: none;
        justify-content: left;
        display: flex;
    }

    li {
        font-family: $mono;
        padding: 4px 8px;
        background-color: $dark-greyish;
        color: $blackerblack;
        margin: 0 2px;
        font-size:12px;

        &:hover {
            animation-name: spin;
            animation-duration: 1s;
        }
    }

}

.project-text {
    color: $dark-greyish;
    font-family: $sans;
    font-size: 15px;
    margin-bottom: 20px;
    text-align: justify;
}

/* project-pic>top>dot+dot+dot+open-btn<pic */


.project-pic {

    margin-bottom: 70px;

    .top {
        background-color: $dark-greyish;
        padding: 4px;
        border: 3px solid $dark-greyish;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        .img-dot {
            height: 12px;
            width: 12px;
            background-color: $blackerblack;
            border-radius: 50%;
            margin: 0 1px;
            display: inline-block;
        }

        .open-btn {
            margin-left: 18rem;
            padding: 0px 10px 2px 10px;
            color: $dark-greyish;
            background-color: $blackerblack;
            border-radius: 4px;
            font-family: $mono;
            border: 0.1rem solid $dark-greyish;
            cursor: pointer;
            font-size: 12px;

            &:active {
                background-color: $greyish;
                color: $white;
            }
        }
    }

    .pic-body {
        border: 3px solid $dark-greyish;
        background-color: $dark-greyish;

    }

    img {
        max-width: 100%;
        height: 80%;
    }
}
</style>