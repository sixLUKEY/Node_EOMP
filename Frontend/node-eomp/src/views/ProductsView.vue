<template>
    <main>
        <div class=" flex justify-between items-center my-12">
            <div>
                <select name="brands" id="brands" class="border border-primary rounded-sm text-primary py-1 cursor-pointer">
                    <option value="All">All Brands</option>
                    <option value="rolex">Rolex</option>
                    <option value="cartier">Cartier</option>
                    <option value="montblanc">Mont Blanc</option>
                </select>
            </div>
            <h1 class="text-5xl text-center">
                Products Page
            </h1>
            <div>
                <select name="filter" id="filter" class=" border border-primary rounded-sm text-primary py-1 cursor-pointer">
                    <option value="price">
                        Price
                    </option>
                </select>
            </div>        
        </div>
        <section class="productsContainer my-12">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>
    </main>
</template>

<script>

    import ProductCard from '@/components/ProductCard.vue';

    export default {
        components: {
            ProductCard
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


</style>