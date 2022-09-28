import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({disable: "phone"})
createApp(App).use(AOS).mount('#app');

