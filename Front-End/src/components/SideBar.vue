<script setup lang="ts">
import { h, ref } from 'vue'
import { MailOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const selectedKeys = ref([])
const openKeys = ref([])
const items = ref([
  {
    key: '1',
    icon: () => h(MailOutlined),
    label: 'Analytics',
    title: 'Analytics',
    path: '/analytics'
  },
  {
    key: '2',
    icon: () => h(CalendarOutlined),
    label: 'Inventory',
    title: 'Inventory',
    path: '/inventory'
  },
  {
    key: '3',
    icon: () => h(SettingOutlined),
    label: 'Add New Shoes',
    title: 'Add New Shoes',
    path: '/add'
  }
])

const handleClick: MenuProps['onClick'] = (menuInfo) => {
  router.push(menuInfo.item.path)
}

</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="vertical"
    :items="items"
    @click="handleClick"
  />
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
