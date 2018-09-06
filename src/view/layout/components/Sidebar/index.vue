<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <sidebar-item v-for="item in routerMap" :item="item" :basePath="item.path" :key="item.name"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import {routerMap} from '@/router'
import SidebarItem from "./SidebarItem.vue";
export default {
    components: {SidebarItem},
    data(){
      return {
          routerMap,
          isCollapse:false
      }
  }
}
</script>
