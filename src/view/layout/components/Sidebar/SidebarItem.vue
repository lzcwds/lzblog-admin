<template>
  <div v-if="item.children" class="menu-wrapper">
    <router-link v-if="hasOneChild(item.children)" :to="resolvePath(item.path)">
      <el-menu-item :index="onlyOneChild.name">
        <svg-icon :icon-class="onlyOneChild.meta.icon"/>
        <span slot="title">{{onlyOneChild.meta.title}}</span>
      </el-menu-item>
    </router-link>


    <el-submenu v-else :index="item.name||item.path">
      <template slot="title">
        <svg-icon :icon-class="item.meta.icon"/>
        <span>{{item.meta.title}}</span>
      </template>
      <router-link v-for="child in item.children" :key="child.name" :to="resolvePath(child.path)">
        <el-menu-item :index="child.name">
          <svg-icon :icon-class="child.meta.icon"/>
          <span slot="title">{{child.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import {mapGetters} from 'vuex'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath:{
        type:String,
        required:true
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
      hasOneChild(children){
        if(children.length ===1){
            this.onlyOneChild = children[0];
            return true;
        }else{
            return false;
        }
      },
      resolvePath(subpath){
          return path.resolve(this.basePath,subpath)
      }
  }
}
</script>

