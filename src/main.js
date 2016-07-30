/**
 * Created by Yang on 16/7/17.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import {initRouter} from './router'
import {initFilters} from './lib/filter'

const DEBUG = true;
window.DEBUG = DEBUG;

Vue.use(Resource);
Vue.use(Router);

let router = new Router({
    root: '/',
    history: true,
    hashbang: false
});
initRouter(router);
initFilters(Vue);
router.start(Vue, '#app'); // 路由生效
