import { createApp } from 'vue';
import HomeComponent from './components/Home.vue';

const app = createApp({
    template: '<home-component />',
    components: {
        'home-component': HomeComponent, 
    },
});


app.mount('#app');
