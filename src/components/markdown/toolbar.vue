<template>
    <div>
        <svg-icon iconClass="chart" />
    </div>
</template>

<script>
    import SvgIcon from "../svgIcon/index.vue";

    export default {
        components: {SvgIcon},
        name: 'MarkToolbar',
        props:{
            item:{
                type:Array,
                default: false
            }
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
