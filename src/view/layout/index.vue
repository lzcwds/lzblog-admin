<template>
    <div  class="app-wrapper">
        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <navbar />
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar'
    import Navbar from "./components/navbar.vue";
    export default {
        name: 'Layout',
        components:{
            Navbar,
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

</style>
