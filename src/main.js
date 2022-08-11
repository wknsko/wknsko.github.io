import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'

const projects = [{
        title: 'Enginen Restaurant',
        tags: ['HTML', 'Vue.js', 'CSS'],
        text: 'Frontend website for restaurant',
        imgsrc: 'enginen.png',
        link: 'https://wknsko.github.io/enginen-restaurant/',
        gitlink: 'https://github.com/wknsko/enginen-restaurant/'
    }, {
        title: 'Under Sun',
        tags: ['HTML', 'Vue.js', 'CSS'],
        text: 'Frontend website for sunglasses company',
        imgsrc: 'under-sun.png',
        link: 'https://wknsko.github.io/under-sun/',
        gitlink: 'https://github.com/wknsko/under-sun/'
    }, {
        title: 'Systack',
        tags: ['HTML', 'Vue.js', 'Sass'],
        text: 'Website for furniture brand made with Vue.js and Sass',
        imgsrc: 'systack-furniture.png',
        link: 'https://wknsko.github.io/systack-furniture/',
        gitlink: 'https://github.com/wknsko/systack-furniture'
    }, {
        title: 'Melia Hotel',
        tags: ['HTML', 'Vue.js', 'CSS'],
        text: 'Hotel web page',
        imgsrc: 'melia-hotel.png',
        link: 'https://wknsko.github.io/melia-hotel/',
        gitlink: 'https://github.com/wknsko/melia-hotel'
    }, {
        title: 'Reddit',
        tags: ['HTML', 'Vue.js', "Axios", "RestAPI", 'CSS'],
        text: 'Reddit Api app with top stories from any sub u choose and getting random story',
        imgsrc: 'reddit.png',
        link: 'https://wknsko.github.io/vue-reddit/',
        gitlink: 'https://github.com/wknsko/vue-reddit'
    }, {
        title: 'Booking Calendar',
        tags: ['HTML', 'Vue.js', 'CSS'],
        text: 'Calendar made with Vue.js for shor term booking',
        imgsrc: 'calendar.png',
        link: 'https://wknsko.github.io/vue-booking-calendar/',
        gitlink: 'https://github.com/wknsko/vue-micro'
    }, {
        title: 'Micro',
        tags: ['HTML', 'Vue.js', "EXPRESS", "MongoDB", 'CSS'],
        text: 'Micro message web site with the ability to post text messages through MongoDb, routing made through vue-routes, more feautures are login, about and profile pages ',
        imgsrc: 'micro.png',
        link: '',
        gitlink: 'https://github.com/wknsko/vue-micro'
    }, {
        title: 'Color Palette',
        tags: ['HTML', 'Vue.js', 'CSS'],
        text: 'Generates 6 random colors with example and you have the ability to copy HEX and RGB of the selected color ',
        imgsrc: 'palette.png',
        link: 'https://wknsko.github.io/vue-palette/',
        gitlink: 'https://github.com/wknsko/vue-palette'
    },
    {
        title: 'Grocery',
        tags: ['HTML', 'Vue.js', "EXPRESS", 'CSS'],
        text: 'Grocery shop front page with product list Database ',
        imgsrc: 'grocery.png',
        link: '',
        gitlink: 'https://github.com/wknsko/vue-grocery'
    },
    {
        title: 'Blog',
        tags: ['HTML', 'Vue.js', 'Bootstrap', 'Axios'],
        text: 'Simple blog that lets you add diffent type of input and then publish post to database',
        imgsrc: 'blog.png',
        link: 'https://wknsko.github.io/vue-blog/',
        gitlink: 'https://github.com/wknsko/vue-blog'
    },
    {
        title: 'To-Do List',
        tags: ['HTML', 'Vue.js', 'Bootstrap'],
        text: 'Small Vue.js project that lets you add your tasks and change type of them',
        imgsrc: 'todo.png',
        link: 'https://wknsko.github.io/vue-to-do/',
        gitlink: 'https://github.com/wknsko/vue-to-do'
    },
    {
        title: 'Calculator',
        tags: ['HTML', 'Vanilla JS', 'CSS'],
        text: 'Simple calculator made just using Vanilla JS',
        imgsrc: 'calculator.png',
        link: 'https://wknsko.github.io/calculator/',
        gitlink: 'https://github.com/wknsko/calculator'
    },
    {
        title: 'News Aggregator',
        tags: ['HTML', 'Vue.js', 'REST API'],
        text: 'App that works with News Rest Api',
        imgsrc: 'news.png',
        link: 'https://wknsko.github.io/vue-news/',
        gitlink: 'https://github.com/wknsko/vue-news'
    }
]

createApp(App).provide('projects', projects).mount('#app')