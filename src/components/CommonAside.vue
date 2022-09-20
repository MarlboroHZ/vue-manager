<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
    <el-menu-item @click="clikckMenu(item)" v-for="item in noChildren" :index ="item.path" :key = "item.path"> 
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.lable}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key = "item.path">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.lable}}</span>
      </template>
      <el-menu-item-group v-for="(subItem, subIndex) in item.children" :index="subItem.path" :key="subItem.path">
        <el-menu-item :index="subIndex.path">{{subItem.lable}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    height: 100%;
    border: none;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
    }
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          lable: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          lable: "商品管理",
          icon: "video-play",
          url: "MallManager/MallManager",
        },
        {
          path: "/user",
          name: "user",
          lable: "用户管理",
          icon: "user",
          url: "UserManager/UserManager",
        },
        {
          lable: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              lable: "页面",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              lable: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clikckMenu(item){
        this.$router.push({
            name: item.name
        })
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
          return this.$store.state.tab.isCollapse
    }
  },
};
</script>
