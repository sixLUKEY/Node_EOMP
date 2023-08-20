<template>
  <main class="my-12">
    <header class="flex">
      <div class=" flex-[5] flex flex-col gap-5">
        <h1 class="text-5xl w-fit">
          Timeless Timepieces
        </h1>
        <p class=" w-[80%] text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis dignissimos autem quam nesciunt alias? Unde magnam tempora perferendis fugiat?
        </p>
        <div class="flex gap-5">
          <button class=" bg-primary text-light px-3 py-1 rounded-sm">
            Shop Now
          </button>
          <button class="border border-primary px-3 text-primary">
            Contact Us
          </button>
        </div>
      </div>
      <div class="flex-[2] my-auto">
        <img class=" w-full" src="https://i.postimg.cc/nh1RJYj4/78690b79-e4f8-4695-95c6-62941ae3b8c0-cutout.png" alt="watch">
      </div>
    </header>

    <section class="my-24">
      <h2 class="text-center text-4xl">
        Featured Piece
      </h2>
      <FeaturedProduct/>
    </section>

    <section>
      <h2 class=" text-center text-4xl">
        Popular Brands
      </h2>
      <BrandContainer/>
    </section>

    <section class="mt-24">
      <Policy/>
    </section>
  </main>
</template>

<script>

  import FeaturedProduct from '@/components/FeaturedProduct.vue';
  import BrandContainer from '@/components/BrandContainer.vue';
  import Policy from '@/components/Policy.vue';

  export default {
    components: {
      FeaturedProduct,
      BrandContainer,
      Policy
    }
  }
</script>

<style scoped>

</style>
