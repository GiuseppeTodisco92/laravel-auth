window.Vue = require('vue');

import app from './views/App.vue';


const App = new Vue({
    el: '#app',
    render: h => h(App)
});
