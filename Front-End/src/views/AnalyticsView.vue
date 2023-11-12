<template>
  <div class="wrapper">
    <h2>Analytics</h2>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--vt-c-white);
  border-radius: 5px;
  padding: 16px;
  height: calc(100vh - 82px - 32);
  overflow: auto;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
let chartData = ref({ labels: [], datasets: [{ data: [] }] })

const chartOptions = {
  responsive: true
}

// let chartData = {labels: ['days'], datasets: [{data: [20,30,40]}]};
// {
//   labels: [ 'January', 'February', 'March' ],
//   datasets: [ { data: [40, 20, 12] } ]
// }
</script>
