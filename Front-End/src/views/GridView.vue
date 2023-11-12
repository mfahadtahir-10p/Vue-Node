<template>
  <a-card style="overflow:scroll" >
    <a-table :columns="columns" :data-source="products" @change="onChange"></a-table>
  </a-card>
</template>
<script lang="ts" setup>
import { DashobardService } from '@/services/modules/dashboard.service';
import type { TableProps } from 'ant-design-vue'
import { ref } from 'vue'
const columns: TableProps['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    // filters: [],
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    sorter: (a, b) => a.name - b.name,
    width: '30%'
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    sorter: (a, b) => a.brand - b.brand
  },
  {
    title: 'Category',
    dataIndex: 'category',
    sorter: (a, b) => a.category - b.category
  },
  {
    title: 'Size',
    dataIndex: 'size',
    sorter: (a, b) => a.size - b.size
  },
  {
    title: 'Color',
    dataIndex: 'color',
    sorter: (a, b) => a.color - b.color
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price
  },
  {
    title: 'Description',
    dataIndex: 'description',
    sorter: (a, b) => a.description - b.description
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    sorter: (a, b) => a.stock - b.stock
  }

]
const products = ref(null)

DashobardService.getAllShoes()
  .then((data) => {
    products.value = data
    console.log(data);
  })
  .catch((err) => console.log(err))

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}
</script>
