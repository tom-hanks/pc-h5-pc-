// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import axios from "axios";
import router from './router';
import echarts from 'echarts'
require('!style-loader!css-loader!less-loader!./assets/css/sprite-base.less');
// require('!style-loader!css-loader!less-loader!./assets/css/sprite-base.less');
import { VueEditor } from "vue2-editor";
import './assets/css/common.css'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
