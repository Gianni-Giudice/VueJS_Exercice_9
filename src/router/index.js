import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Form from '../components/Form.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { 
            path: '/', 
            name: 'Home', 
            component: Home 
        }, 
        { 
            path: '/form', 
            name: 'Form', 
            component: Form 
        },
        { 
            path: '/about', 
            name: 'About', 
            component: About 
        }
    ]
});