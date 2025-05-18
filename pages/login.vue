<script setup>

const isLoggedIn = useIsLoggedIn();
definePageMeta({
    layout : "plain",
})

function login() {
    isLoggedIn.value = true;
    useRouter().push("/")
}
</script>

<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label>Username
            <input type="text">
        </label>
        <label>Password
            <input type="text">
        </label>
        <button>login</button>
        </form>
       
    </div>
</template>