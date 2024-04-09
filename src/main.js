import { createApp } from "vue";
// import Vue from 'vue';
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router";
createApp(App).use(router).mount("#app");
// Import các component mới
// import AppHeader from './components/AppHeader.vue';
// import InputSearch from './components/InputSearch.vue';
// import ContactList from './components/ContactList.vue';

// // Vue.config.productionTip = false;

// // Đăng ký các component mới
// Vue.component('AppHeader', AppHeader);
// Vue.component('InputSearch', InputSearch);
// Vue.component('ContactList', ContactList);

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');
