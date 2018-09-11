<template>
    <div :class="classObj" class="app-wrapper">

        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <navbar />
            <app-main />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './components/Sidebar'
import Navbar from "./components/navbar.vue";
import AppMain from "./components/appMain.vue";
export default {
    name: 'Layout',
    components:{
        AppMain,
        Navbar,
        Sidebar
    },
    data() {
        return {
        }
    },
    computed:{
        ...mapGetters([
            'sidebar'
        ]),
        classObj(){
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
