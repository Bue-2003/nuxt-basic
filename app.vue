<template>
  <div>
   <NuxtLayout> 
    <NuxtPage/>
   </NuxtLayout>
  </div>
</template>


<script setup>
useHead({
  titleTemplate : (title) => {
    return title ? `${title} - My movie site`: "My movie Site"
  }
})
</script>