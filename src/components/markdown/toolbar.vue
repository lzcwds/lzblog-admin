<template>
    <div>
        <div class="mark-toolbar">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MarkToolbar',
        props:{
            toolbar:{
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
.mark-toolbar{

}
</style>
