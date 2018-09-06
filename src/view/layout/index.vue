<template>
    <div  class="app-wrapper">
        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar'
    export default {
        name: 'Layout',
        components:{
            Sidebar
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
