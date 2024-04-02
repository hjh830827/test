import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// directive 선언
app.directive('money', {
    created(el) {
        el.addEventListener("input", (e) => {
            const trim = e.target.value.trim().replaceAll(',','');
            const regex = new RegExp(/^[0-9]+$/);
            e.target.value = regex.test(trim) ? trim.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
        })
    },
});


import apiCall from '@/js/api-call';
app.config.globalProperties.$apiCall = apiCall;

app.mount('#app')
