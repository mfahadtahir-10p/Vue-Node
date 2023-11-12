<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked')
}

defineProps<{
  title: string | number
  subTitle: string | number
}>()
</script>

<template>
  <div class="greetings">
    <p class="title">{{ title }}</p>
    <h3 class="subTitle">{{ subTitle }}</h3>
    <a-button @click="handleClick"></a-button>
  </div>
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
