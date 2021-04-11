<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home页面</el-menu-item>
      <!-- 也可以也能用其他子应用 -->
      <el-menu-item index="/vue">加载vue子应用</el-menu-item>
      <el-menu-item index="/react">加载react子应用</el-menu-item>
    </el-menu>
    <router-view></router-view> <!--默认加载-->
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<style>
</style>
