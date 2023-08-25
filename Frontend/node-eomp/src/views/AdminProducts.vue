<template>
    <div class="flex flex-col gap-5 my-6">
        <router-link to="/admin/products/add" class="ms-auto">
            <button class="bg-primary text-light py-2 px-5 rounded-sm">
                Add Product
            </button>
        </router-link>

        <table class="w-full text-center">
            <thead class="border-primary border-2 text-xl">
                <tr>
                    <th class="py-3">ID</th>
                    <th>Name</th>
                    <th class="model">Model</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody class="my-5" v-if="products">
                <AdminProduct
                v-for="product of products"
                :key="product.prodID"
                :product="product"
                />
            </tbody>
            <tbody class="my-5" v-else>
                <Loader/>
            </tbody>
           
        </table>
    </div>
</template>

<script>

    import AdminProduct from '@/components/AdminProduct.vue';
    import Loader from '@/components/Loader.vue';

    export default {
        components: {
            AdminProduct,
            Loader
        },
        computed: {
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch("fetchProducts")
        }
    }
</script>

<style scoped>
    @media screen and ( max-width: 640px ) {
        .model{
            display: none;
        }
    }
</style>