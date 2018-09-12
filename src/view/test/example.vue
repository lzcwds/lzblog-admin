<template>
    <div>
        <markdown :width="500" :height="300"></markdown>

    </div>
</template>

<script>
    import Markdown from '@/components/markdown'
    export default {
        components: {Markdown},
        name: 'Example',
        data() {
            return {
                html:''
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
