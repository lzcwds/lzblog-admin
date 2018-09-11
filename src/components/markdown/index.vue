<template>
    <div>
        <mark-toolbar />
        <textarea :style="{width:width+'px',height:height+'px'}" v-model="html" class="markdown-container"></textarea>
        <div v-html="tohtml"></div>
    </div>
</template>

<script>
    import marked from 'marked';
    import hljs from 'highlight.js'
    import 'highlight.js/styles/monokai-sublime.css';
    import MarkToolbar from "./toolbar.vue";
    export default {
        components: {MarkToolbar},
        name: 'Markdown',
        props:{
            height: {
                type: Number,
                default: false
            },
            width:{
                type: Number,
                default: false
            }
        },
        data() {
            return {
                html:''
            }
        },
        created(){
            let renderer = new marked.Renderer();
            marked.setOptions({
                renderer: renderer,
                highlight: function(code) {
                    return hljs.highlightAuto(code).value;
                },
                pedantic: false,
                gfm: true,
                tables: true,
                breaks: false,
                sanitize: true,
                smartLists: true,
                smartypants: false,
                xhtml: false
            })
        },
        computed:{
            tohtml(){
                return marked(this.html);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.markdown-container{

}
</style>
