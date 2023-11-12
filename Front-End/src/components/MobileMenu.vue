<script lang="ts" setup>

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

defineProps<{
  isOpen: boolean,
  close: () => void
}>()
</script>


<template>
  <a-drawer
    placement="bottom"
    :closable="false"
    :open="isOpen"
    @close="close"
  >
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="vertical"
    :items="items"
    @click="handleClick"
  />
  </a-drawer>
</template>
