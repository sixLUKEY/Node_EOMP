<template>
    <main>
        <div class=" flex justify-between items-center my-12">
            <div>
                <select name="brands" id="brands" class="border border-primary rounded-sm text-primary py-1 cursor-pointer lg:text-2xl lg:px-3">
                    <option value="All">All Brands</option>
                    <option value="rolex">Rolex</option>
                    <option value="cartier">Cartier</option>
                    <option value="montblanc">Mont Blanc</option>
                </select>
            </div>
            <h1 class="text-5xl text-center lg:text-7xl">
                Products Page
            </h1>
            <div>
                <select name="filter" id="filter" class=" border border-primary rounded-sm text-primary py-1 cursor-pointer lg:text-2xl lg:px-3">
                    <option value="price">
                        Price
                    </option>
                </select>
            </div>        
        </div>
        <section class="productsContainer my-12" v-if="products">
            <ProductCard 
            v-for="product of products"
            :key="product.prodID"
            :product="product"
            />
        </section>
        <section class="productsContainer my-12" v-else>
            Loading...
        </section>
    </main>
</template>

<script>

    import ProductCard from '@/components/ProductCard.vue';

    export default {
        components: {
            ProductCard
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

    .productsContainer{
        display: grid;
        grid-template-columns: repeat( 2, 1fr );
        /* grid-template-rows: repeat( 1, 1fr); */
        grid-auto-rows: 1fr;
        gap: 1.25rem;
    }

    @media screen and (min-width: 768px) {
        .productsContainer{
            grid-template-columns: repeat( 3, 1fr);
        }
    }
    

    @media screen and (min-width: 1024px) {

        .productsContainer{
            grid-template-columns: repeat( 2, 1fr);
        }
    }

    @media screen and (min-width: 1300px) {
        .productsContainer{
            grid-template-columns: repeat( 4, 1fr);
        }
    }


</style>