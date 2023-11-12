<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import SideBar from './components/SideBar.vue'
  import { ref } from 'vue';
import MobileMenu from './components/MobileMenu.vue';

  let isOpen = ref(false);
  const openBottomSheet = () => {
    isOpen.value = true;
  }
  const closeBottomSheet = () => {
    isOpen.value = false;
  }
</script>

<template>
  <h2 class="navbar">Forsit
    <a-button type="primary" @click="openBottomSheet">Open</a-button>
  </h2>
  <a-container class="bv-example-row">
    <a-row :gutter="[0, 16]">
      <a-col :xs=0 :sm="0" :md=0 :lg=5  class="gutter-row sidebar">
        <SideBar />
        <MobileMenu :close="closeBottomSheet" :isOpen="isOpen" />
      </a-col>
      <a-col :md=24 :lg=19 class="gutter-row body" >
        <div class="gutter-box">
          <RouterView />
        </div>
      </a-col>
    </a-row>
  </a-container>
</template>

<style scoped>
.gutter-box {
  padding: 8px;
}

.navbar {
  background-color: var(--vt-c-white);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  border-bottom: 1px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
  /* color: var(--vt-c-white); */
  height: 80px;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.sidebar {
  background-color: var(--vt-c-white);
  height: calc(100vh - 82px);
}
.sidebar ul {
  list-style-type: none;
  padding: 10px;
}

.body {
  border-radius: 5px;
  height: calc(100vh - 82px);
  padding: 16px;
}
</style>
