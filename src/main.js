import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'

const projects = [{
        title: 'To-Do List',
        tags: ['HTML', 'Vue.js', 'Bootstrap'],
        text: 'Small Vue.js project that lets you add your tasks and change type of them',
        imgsrc: 'todo.png',
        link: 'https://wknsko.github.io/vue-to-do/',
        gitlink: 'https://github.com/wknsko/vue-to-do'
    },
    {
        title: 'Blog',
        tags: ['HTML', 'Vue.js', 'CSS'],
        text: 'Frontend of simple blog that lets you add diffent type of input',
        imgsrc: 'blog.png',
        link: 'https://wknsko.github.io/vue-blog/',
        gitlink: 'https://github.com/wknsko/vue-blog'
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