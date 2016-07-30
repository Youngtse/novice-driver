/**
 * Created by Yang on 16/7/30.
 */
module.exports = {
    title: "首页",
    component: require('./page/layout/layout.vue'),
    subRoutes: {
        '/index': {
            component: require('./page/home/index.vue')
        }
    }
};