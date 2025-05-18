<template>
  <NuxtImg src="/cat.jpg" sizes="xs:100vw sm:50vw md:1860px" />
</template>

<script setup>
definePageMeta({
    layout : "plain"
})
</script>

<style scoped>
img{
    display: block;
    max-width: 100%;
}
</style>    