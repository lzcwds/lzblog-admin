<template>
    <div class="navbar clearfix">
        <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>

        <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in levelList":key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Hamburger from "@/components/Hamburger/index.vue";

    export default {
        components: {Hamburger},
        name: 'Navbar',
        data() {
            return {
                levelList: []

            }
        },
        computed:{
            ...mapGetters([
                'sidebar'
            ])
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            toggleSideBar(){
                this.$store.dispatch('toggleSideBar')
            },
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name)
                const first = matched[0];
                if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
                    matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
                }
                this.levelList = matched
            }
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
    .breadcrumb-container {
        margin-left: 50px;
        line-height: 50px;
    }
}
</style>
