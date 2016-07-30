/**
 * Created by Yang on 16/7/24.
 */
export function initRouter(router) {
    router.map({
        '/home': require("./home.router"),
        '/error': {
            title: "404",
            component: require("./page/error.vue")
        }
    });
    router.alias({
        '/': '/home/index'
    });
    router.redirect({
        '*': '/error' // 兜底
    });

    router.beforeEach(function (transition) {
        let to = transition.to;
        window.DEBUG && console.log(" %c Route change: ", "font-weight:bold;", to.path);
        transition.next()
    });
}