<script setup>
const isLoggedIn = useIsLoggedIn();

// const user = useUser();
</script>
<template>
    <div>
        <nav style="display:flex; gap: 10px;">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/movies">Movies</NuxtLink>
            <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
            <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
            <a href="#" v-else @click.prevent="isLoggedIn = false">Logout</a>
        </nav>
    </div>
    <slot></slot>
</template>
