/**
 * Created by dy on 2018/9/10.
 *
 */

import dialogMove from './dialogMove'

const install = function(Vue) {
    Vue.directive('dialogmove', dialogMove)
}

if (window.Vue) {
    window['dialogmove'] = dialogMove
    Vue.use(install);
}

dialogMove.install = install
export default dialogMove