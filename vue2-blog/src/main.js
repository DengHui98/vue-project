import Vue from "vue";
import App from "./App.vue";
import "@/styles/global.less";
import showMessage from "@/utils/showMessage";

import router from "@/router";

// showmessage 全局注册
Vue.prototype.$showMessage = showMessage;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
