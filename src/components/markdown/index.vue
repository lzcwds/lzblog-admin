<template>
    <div class="markdown-container">
        <mark-toolbar  class="mark-toolbar" :item="toolbar"/>
        <textarea resize="none" :style="{width:width+'px',height:height+'px'}" v-model="html" class="editor"></textarea>
        <div class="preview">
            <el-scrollbar :style="{height:height+'px'}">
                <div class="preview_container" v-html="tohtml">
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
    import marked from 'marked';
    import hljs from 'highlight.js'
    import 'highlight.js/styles/default.css';
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
                html:'',
                toolbar:['bold','em']
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


</style>
