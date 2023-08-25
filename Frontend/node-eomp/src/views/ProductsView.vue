<template>
  <main>
    <div class="flex justify-between items-center my-12">
      <div class="filter">
        <select
          name="brands"
          id="brands"
          class="border border-primary rounded-sm text-primary py-1 cursor-pointer lg:text-2xl lg:px-3"
          v-model="selectedFilter"
        >
          <option value="all" >All Brands</option>
          <option value="rolex" >Rolex</option>
          <option value="cartier" >Cartier</option>
          <option value="montblanc" >Mont Blanc</option>
        </select>
      </div>
      <h1 class="text-5xl text-center lg:text-7xl">Products</h1>
      <div class="sort">
        <select
          name="filter"
          id="filter"
          class="border border-primary rounded-sm text-primary py-1 cursor-pointer lg:text-2xl lg:px-3"
          v-model="sortFilter"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="priceHigh">Price: High -> Low</option>
          <option value="priceLow">Price: Low -> High</option>
        </select>
      </div>
    </div>
    <section class="productsContainer my-12" v-if="filteredProducts.length > 0">
      <ProductCard
        v-for="product of products"
        :key="product.prodID"
        :product="product"
      />
    </section>
    <section class="productsContainer my-12" v-else>
      <Loader />
    </section>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { gsap } from "gsap";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    ProductCard,
    Loader,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;

      if (this.selectedFilter !== "all") {
        filtered = filtered.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      if (this.sortFilter === "alphabetical") {
        filtered.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.sortFilter === "priceHigh") {
        filtered.sort((a, b) => b.amount - a.amount);
      } else if (this.sortFilter === "priceLow") {
        filtered.sort((a, b) => a.amount - b.amount);
      }

      return filtered;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts")
    .then(() => {
        this.products = this.$store.state.products
    })

    let tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.from("h1", { opacity: 0, y: -100, ease: "elastic.out(1, 0.4)" })
      .from(".filter", { opacity: 0, x: -100, duration: 0.5 }, "-=0.3")
      .from(".sort", { opacity: 0, x: 100, duration: 0.5 }, "-=0.1");
  },
  data() {
    return {
      selectedFilter: "all",
      sortFilter: "alphabetical",
      products: [],
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.productsContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat( 1, 1fr); */
  grid-auto-rows: 1fr;
  gap: 1.25rem;
}

@media screen and (min-width: 768px) {
  .productsContainer {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .productsContainer {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1300px) {
  .productsContainer {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and ( max-width: 400px ) {
  .productsContainer{
    grid-template-columns: 1fr;
  }

  select{
    display: none;
  }
}
</style>
