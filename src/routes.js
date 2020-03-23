import Home from './components/Home.vue';
import Form from './components/Form.vue';
import About from './components/About.vue';

const routes = [
    { path: '/', component: Home }, 
    { path: '/form', component: Form },
    { path: '/about', component: About }
];

export default routes;