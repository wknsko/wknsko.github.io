<template>
<div class="experience">
    <div data-aos="fade-in" data-aos-duration="2500" class="title">Experience</div>
    <div class="exp-body">
        <div class="line-body" data-aos-duration="2500" data-aos="fade-right">
            <div class="line"></div>
            <div @click="actual = 0" :class="actual === 0 ? 'active-dot' : 'dot'"></div>
            <div @click="actual = 1" :class="actual === 1 ? 'active-dot' : 'dot'" style="margin-top: 70px"></div>
            <div @click="actual = 2" :class="actual === 2 ? 'active-dot' : 'dot'" style="margin-top: 70px"></div>
            <div @click="actual = 3" :class="actual === 3 ? 'active-dot' : 'dot'" style="margin-top: 70px;"></div>
        </div>
        <div class="point" data-aos-duration="2500" data-aos="fade-left">
            <div style="animation: fadein 2s" class="point-title">{{points[actual].title}}</div>
            <div class="point-date">{{points[actual].date}}</div>
            <div class="point-text">{{points[actual].desc}}</div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const actual = ref(0);
        const points = [
            { title: 'Education', desc: 'Studied fashion design at Secondary School of Fashion in Prague, then spend one year at Faculty of IT, CVUT and two years at Faculty of Informatics and Statistics, VSE' },
            { title: 'Freelance', date: 2016, desc: `Worked remotely as part-time website templates' developer in HTML and CSS ` },
            { title: 'Front-end Developer', date: '2018-2020', desc: 'Creating one page landing websites for businesses, using mostly HTML, CSS and basic JS, making graphic content for  business websites and social media using Figma' },
            { title: 'QA', date: '2020-2022', desc: 'Remotely worked on optimizing QA as part of a outsourcing team. ' },
            { title: 'Courses', desc: 'Took cources for basic Javascript few years back, but improving my skills with online courses(such as Odin, Udemy, Microsoft) and recently finished Vue Course.' }];

            return {
                actual, points
            }
    }

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

    
.experience {
    width: 90vw;
    max-width: 800px;
    margin: 30px auto;
    padding-bottom: 100px;
    
}

.exp-body {
    display: flex;
    align-items: center;

}

.exp-body .line-body,
.point {
    width: 40%;
}

.line-body {
    margin-left: 20vw;
}

.line {
    height: 400px;
    width: 4px;
    background-color:$dark-greyish;
    z-index: -1;
}

.dot {
    height: 15px;
    width: 15px;
    background-color: $dark-greyish;
    z-index: 1;
    border-radius: 10px;
    margin-left: -5.5px;
    margin-top: -350px;
    cursor: pointer;
}
.active-dot {
    height: 15px;
    width: 15px;
    background-color: $darker-white;
    z-index: 1;
    border-radius: 10px;
    margin-left: -5.5px;
    margin-top: -350px;
    cursor: pointer;
}

.point {
    text-align: justify;
    margin-left: -10vw;
}

.point-title {
    color: $darker-white;
    font-family: $mono;
    text-transform: lowercase;
    font-weight: 600;
    font-size: 30px;
}
.point-date {
    color: $dark-greyish;
    font-family: $mono;
    font-weight: 100;
    font-size: 14px;
    font-style: italic;

}

.point-text {
    color: $greyish;
    font-family: $sans;
    font-weight: 100;
    font-size: 14px;
}
.fadein {
    animation: fadein 2s;
}
</style>