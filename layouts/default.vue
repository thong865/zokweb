<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavbarMaintop />
      </el-header>
      <el-container>
        <el-aside width="200px"><NavbarAside /></el-aside>
        <el-container>
          <el-main><NuxtPage /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>