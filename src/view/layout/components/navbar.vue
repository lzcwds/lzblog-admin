<template>
    <div class="navbar clearfix">
        <hamburger :toggle-click="toggleSideBar" :is-active="opened" class="hamburger-container"/>
    </div>
</template>

<script>
    import Hamburger from "../../../components/Hamburger/index.vue";

    export default {
        components: {Hamburger},
        name: 'Navbar',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                opened:false
            }
        },
        methods:{
            toggleSideBar(){
                this.opened = !this.opened;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.navbar{
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    .hamburger-container {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }
}
</style>
