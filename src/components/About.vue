<template>
<div class="about" >
    <div data-aos-duration="2500" data-aos="fade-in" class="title" >About Me</div>
    <div  data-aos-offset="200" data-aos-duration="1500" data-aos="zoom-in-right" class="pic">
        <img  src="../assets/me.jpg" alt="" class="my-pic">
    </div>
    <div data-aos="fade-in" data-aos-duration="2500" class="text">Born and raised in Ukraine, but living in Prague for over a decade. Got interested in front-end
        development by coding
        designs for 'hobby' websites for herself and her digital art as middle school student and also spend a lot of
        time coding (and designing) customised themes for tumblr. Finished Secondary School of
        Fashion, got into Faculty of
        Informatics, spend some time there and another university's tech faculty, but chose to take it out of school
        because of an interesting job offer coding HTML/CSS
        templates for websites at American firm. After few years and small break working as sales assistant was coding
        and designing
        landing pages for businesses. Last two years dedicated to QA, but decided to get back to development
        with Vue.js. And recent few months working part time as front-end coder and searching for Vue.js position to elevate
        level of knowledge with meaningfull projects. Working mostly remote. Fluent in Czech, English, Russian.</div>

    <div class="tags" data-aos-duration="1000" data-aos="flip-up">
        <ul v-for="tag in tags" :key="tag">
            <li>{{tag}}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tags: ['JS(ES6+)', 'VUE.JS', 'NODE.JS', 'GIT', 'AXIOS', 'EXPRESS', 'HTML', 'CSS']
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

body {
    background-color: $darkest;
}

.about {
    margin-top: 110vh;
    width: 90vw;
    max-width: 800px;
    margin: 15vh auto 0 auto;
}

.title {
    color: $white;
    font-family: $mono;
    font-weight: 700;
    font-size: min(45px, 7vw);
    
    margin: 50px 0;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.825);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: $blackerblack;
    text-shadow: 3px 3px $dark-greyish;
    opacity: 0.9;
    
}

.pic {
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.8;
    margin-bottom: 30px;
}

.pic img {
    object-fit: cover;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    box-shadow: 30px 7px rgba(255, 255, 255, 0.273);
    border: 4px solid $blackerblack;
}

.text {
    max-width: 600px;
    margin: 20px auto 30px auto;
    font-size: 15px;
    font-family: $sans;
    color: $darker-white;
    font-weight: 400;
}

.tags {
    text-align: justify;
    margin-bottom: 100px;

    ul {
        display: inline-flex;
        list-style: none;
        margin-bottom: -30px;
        margin-left: -15px;
    }

    li {
        font-family: monospace;
        padding: 7px 13px;
        background-color: $dark-greyish;
        color: $blackerblack;

        &:hover {
            animation-name: spin;
            animation-duration: 1s;
        }
    }
}
</style>