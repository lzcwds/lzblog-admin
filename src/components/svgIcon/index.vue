<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
    export default {
        prop:{
          iconClass:{
              type:String,
              required:true
          },
          className:{
              type:String,
              default:''
          }
        },
        name: 'SvgIcon',
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            }
        }
    }
</script>

<style scoped>

</style>
