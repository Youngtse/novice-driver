/**
 * Created by Yang on 16/7/30.
 */
let marked = require('marked');
export function initFilters(Vue) {
    Vue.filter('marked', function (value) {
        return marked(value)
    })
}