<template>
    <div>
        <div class="test" v-dialogmove="move">test</div>
    </div>
</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                move:{
                    parent:''
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 20px;
    border: 1px #666 solid;
    text-align: center;
    z-index: 1001;
}
</style>
