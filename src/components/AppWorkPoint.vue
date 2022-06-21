<template>
    <div class="point">
        <h5>{{points[openPoint].title}}</h5>
        <div v-if="points[openPoint].date" class="point-date">{{points[openPoint].date}}</div>
        <div class="point-text">{{points[openPoint].desc}}</div>
    </div>
</template>

<script>
export default {
    props:['openPoint'],
    data() {
        return {
            points: [
                { title: 'Education',  desc: 'Studied fashion design at Secondary School of Fashion in Prague, then spend one year at Faculty of IT, CVUT and two years at Faculty of Informatics and Statistics, VSE'},
                { title: 'Freelance', date: 2016, desc: `Worked remotely as part-time website templates' developer in HTML and CSS ` },
                { title: 'Front-end Developer', date: '2018-2020', desc: 'Creating one page landing websites for businesses, using mostly HTML, CSS and basic JS, making graphic content for  business websites and social media using Figma' },
                { title: 'QA', date: '2020-2022', desc: 'Remotely worked on optimizing QA as part of a outsourcing team. ' },
                { title: 'Courses', desc: 'Took cources for basic Javascript few years back, but improving my skills with online courses(such as Odin, Udemy, Microsoft) and recently finished Vue Course.' }],
               
            
        }
       
    },
    watch: {
    },
    mounted() {
       
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

.point {
    padding: 20px 0px;
    width: 50vw;
    margin: 0 auto;
    text-align: justify;
    font-family: $r, sans-serif;
    color: $stroke;
    animation-name: opacity;
    animation-duration: 2s;
    height: 200px;
    
    h5 {
        font-size: 1.4rem;
        font-weight: 300;
        color: $shadow;
        margin-bottom: 10px;
        
    }
    .point-date {
        color: $body;
        background-color: $med;
        padding: 5px 13px;
        width: 100px;
        text-align: center;
        margin: 20px 0px;
    }
}

</style>
