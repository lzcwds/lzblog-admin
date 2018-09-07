/**
 * Created by dy on 2018/8/24.
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex);

const app = {
    state:{
        sidebar:{
            opened:true
        }
    },
    getters:{
        sidebar: state => state.sidebar,
    },
    mutations:{
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
        },
    },
    actions:{
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default new Vuex.Store(app);