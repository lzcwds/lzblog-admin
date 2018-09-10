<template>
    <div>
        <div class="test" v-dialogmove="move">test</div>
    </div>
</template>

<script>
    import dialogmove from '@/directive/dialogMove'
    export default {
        name: 'Test',
        directives:{
            dialogmove
        },
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
