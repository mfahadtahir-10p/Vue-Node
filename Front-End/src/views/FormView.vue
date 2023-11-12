<script lang="ts" setup>
import { ref } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { ShoeService } from '@/services/modules/Shoe.service';


const labelCol = { style: { width: '150px' } }
const wrapperCol = { span: 14 }
const radioValue = ref('apple');
let data = ref({
  name: '',
  brand: '',
  color: '',
  category: '',
  date: '',
  description: '',
  size: '',
  stock: '',
})
const handleSubmit = () => {
  console.log(data.value);
  ShoeService.addShoe(data.value)
  .then((data) => {
    // alert("Data submited successfully");
    console.log(data);
  })
  .catch((err) => console.log(err))
}
</script>

<template>
  <a-card>
    <h2>Add New Item</h2>
    <a-form
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="horizontal"
      :disabled="false"
      style="max-width: 600px"
      labelAlign="left"
    >
      <a-form-item label="Name" v-model="data.name" >
        <a-input />
      </a-form-item>
      <a-form-item label="Brand" v-model="data.brand" >
        <a-select>
          <a-select-option value="Nike">Nike</a-select-option>
          <a-select-option value="Reebok">Reebok</a-select-option>
          <a-select-option value="Adidas">Adidas</a-select-option>
          <a-select-option value="Puma">Puma</a-select-option>
          <a-select-option value="ASICS">ASICS</a-select-option>
          <a-select-option value="New Balance">New Balance</a-select-option>
          <a-select-option value="Under Armour">Under Armour</a-select-option>
          <a-select-option value="Mizuno">Mizuno</a-select-option>
          <a-select-option value="Saucony">Saucony</a-select-option>
          <a-select-option value="Hoka One One">Hoka One One</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Color" v-model="data.color" >
        <a-select>
          <a-select-option value="Red">Red</a-select-option>
          <a-select-option value="Green">Green</a-select-option>
          <a-select-option value="Blue">Blue</a-select-option>
          <a-select-option value="Black">Black</a-select-option>
          <a-select-option value="White">White</a-select-option>
          <a-select-option value="Pruple">Pruple</a-select-option>
          <a-select-option value="Yellow">Yellow</a-select-option>
          <a-select-option value="Cyan">Cyan</a-select-option>
          <a-select-option value="Crimson">Crimson</a-select-option>
          <a-select-option value="Grey">Grey</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Category" v-model="data.category">
        <a-radio-group v-model:value="radioValue">
          <a-radio value="Life Style Shoes">Life Style Shoes</a-radio>
          <a-radio value="Running Shoes">Running Shoes</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="Date Added" v-model="data.date">
        <a-date-picker />
      </a-form-item>
      <!-- <a-form-item label="TreeSelect">
        <a-tree-select :tree-data="treeData" />
      </a-form-item> -->
      <!-- <a-form-item label="Checkbox">
        <a-checkbox>checkbox</a-checkbox>
      </a-form-item> -->

      <!-- <a-form-item label="Cascader">
        <a-cascader :options="options" />
      </a-form-item> -->
      <!-- <a-form-item label="RangePicker">
        <a-range-picker />
      </a-form-item> -->
      <a-form-item label="Size" v-model="data.size">
        <a-input-number />
      </a-form-item>
      <a-form-item label="Stock" v-model="data.stock">
        <a-input-number />
      </a-form-item>

      <a-form-item label="Description" v-model="data.description">
        <a-textarea :rows="4" />
      </a-form-item>
      <!-- <a-form-item label="Switch">
        <a-switch v-model:checked="checked" />
      </a-form-item> -->
      <a-form-item label="Upload">
        <a-upload action="/upload.do" list-type="picture-card">
          <div>
            <PlusOutlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
      </a-form-item>
      <a-button type="primary" @click="handleSubmit" >Submit</a-button>
    </a-form>
  </a-card>
</template>
