<template>
    <main class=" flex flex-col my-12 min-h-[60vh]">
        <div class="mx-auto rounded-sm bg-primary text-light p-1 w-fit text-2xl flex gap-2">
            <router-link to="/admin/users">
                users
            </router-link>
            
            <router-link to="/admin/products">
                products
            </router-link>
        </div>
        <router-view/>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    a.router-link-exact-active{
        background-color: white;
        color: var(--primary-color);
    }

    a{
        border-radius: 0.075rem;
        padding: 0.25rem 0.5rem;
        transition: 0.2s;
    }
</style>