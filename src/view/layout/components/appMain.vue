<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"/>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key() { 
                return this.$route.fullPath
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-main {
    /*84 = navbar + tags-view = 50 +34 */
    min-height: calc(100vh - 84px);
    overflow: hidden;
    padding: 5px;
}
</style>
