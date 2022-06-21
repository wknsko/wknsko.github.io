<template>
    <div class="about">
        <h2>About Me</h2>
        <div class="about-body">
            <div class="about-img"><img src="../assets/me.jpg" /></div>
            <div class="about-text">Born and raised in Mariupol, Ukraine, but based in Prague for over a decade. Got interested in front-end development by making designs for 'hobby' websites on free hosting(narod.ru,
            tut.su) as student and also spend a lot of time making customised themes on tumblr. Still then it wasn't
            career choice, but one of hobbies. Finished Secondary School of Fashion, got into Faculty of
            Informatics, spend some time there and another university, but chose to take a job making HTML/CSS
            templates for websites. After few years and small break working as sales assistant was creating
            landing pages for businesses. Last two years dedicated to QA, but decided to get back to development
            with learning Vue.js. Working mostly remote. Fluent in Czech, English, Russian.</div>
        </div>

        <div class="about-tags">
            <ul v-for="tag in tags" :key="tag">
                <li>{{tag}}</li>
            </ul>
            <div class="tag-text">in the process of learning</div>
            <ul v-for="tag in learnTags" :key="tag">
                <li>{{tag}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: ['JS(ES6+)', 'VUE.JS', 'NODE.JS', 'GIT', 'AXIOS', 'HTML', 'CSS'],
            learnTags: ['TYPESCRIPT', 'ANGULAR', 'MONGODB', 'EXPRESS'],
        }
    },

}
</script>

<style lang="scss">
@media screen and (max-width: 700px) {
    .text-none {
        display: none;
    }
        .resume {
            display: none
        }
    .about {
        max-width: 500px !important;
        h2 {
            text-align: center;
        }
    }
    
    .about-body {
        max-width: 500px !important;
        display: flex;
        flex-wrap: wrap;
        div {
            padding: 30px;
        }
        .about-img {
            margin: 0 auto;
        }
       
    }
}
</style>