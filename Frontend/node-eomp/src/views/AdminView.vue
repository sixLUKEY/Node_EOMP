<template>
    <main class="flex flex-col gap-5 my-6">
        <router-link to="admin/add" class="ms-auto">
            <button class="bg-primary text-light py-2 px-5 rounded-sm">
                Add Product
            </button>
        </router-link>

        <table class="w-full text-center">
            <thead class="border-primary border-2 text-xl">
                <tr>
                    <th class="py-3">ID</th>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody class="my-5">
                <AdminProduct/>
                <AdminProduct/>
                <AdminProduct/>
                <AdminProduct/>
            </tbody>
           
        </table>
    </main>
</template>

<script>

    import AdminProduct from '@/components/AdminProduct.vue';

    export default {
        components: {
            AdminProduct
        }
    }
</script>

<style scoped>

</style>