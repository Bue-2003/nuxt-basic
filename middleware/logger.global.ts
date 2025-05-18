export default defineNuxtRouteMiddleware((to, from) => {
    console.log("the middle from " , to , from)
})
