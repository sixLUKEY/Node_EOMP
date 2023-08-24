<template>
  <main class="my-12">
    <header class="flex">
      <div class=" flex-[5] flex flex-col gap-5">
        <h1 class="text-5xl w-fit lg:text-7xl heading">
          Timeless Timepieces
        </h1>
        <p class=" w-[80%] text-primary lg:text-2xl subHeading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis dignissimos autem quam nesciunt alias? Unde magnam tempora perferendis fugiat?
        </p>
        <div class="flex gap-5 lg:text-2xl">
          <router-link to="/products" class=" bg-primary text-light px-3 py-1 rounded-sm btn1 flex justify-center items-center">
            Shop Now
          </router-link>
          <router-link to="/contact" class="border border-primary px-3 text-primary btn2 flex justify-center items-center">
            Contact Us
          </router-link>
        </div>
      </div>
      <div class="flex-[2] my-auto landImg">
        <img class=" w-full" src="https://i.postimg.cc/nh1RJYj4/78690b79-e4f8-4695-95c6-62941ae3b8c0-cutout.png" alt="watch">
      </div>
    </header>

    <section class="my-16">
      <h2 class="text-center text-4xl lg:text-6xl featuredHead">
        Featured Piece
      </h2>
      <FeaturedProduct/>
    </section>

    <section>
      <h2 class=" text-center text-4xl lg:text-6xl popularHead">
        Popular Brands
      </h2>
      <BrandContainer/>
    </section>

    <section class="my-16 policy">
      <Policy/>
    </section>
  </main>
</template>

<script>

  import FeaturedProduct from '@/components/FeaturedProduct.vue';
  import BrandContainer from '@/components/BrandContainer.vue';
  import Policy from '@/components/Policy.vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  export default {
    components: {
      FeaturedProduct,
      BrandContainer,
      Policy
    },mounted(){

      let tl = gsap.timeline({defaults:{duration:0.8}})

      tl.from('.heading', {opacity: 0, y:-70})
      .from('.subHeading', {opacity: 0, x:-50}, "-=0.2")
      .from('.landImg', {opacity: 0, x:100}, "-=0.625")
      .from('.btn1', {opacity: 0, y:70, duration:0.25})
      .from('.btn2', {opacity: 0, y:70,duration:1, ease: "elastic.out(1, 0.4)"}, "-=0.1")

      

      gsap.from('.featuredProd',{
                x: -500,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.featuredHead',
                    // markers: true,
                    start: 'top 20%',
                    end: 'top 0%',
                    scrub: true,
                    pin: true
                }
            })

            gsap.from('.featuredHead',{
                x: -500,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.featuredHead',
                    // markers: true,
                    start: 'top 40%',
                    end: 'top 20%',
                    scrub: true,
                    pin: true
                }
            })

            gsap.from('.popularHead',{
                x: -500,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.popularHead',
                    // markers: true,
                    start: 'top 40%',
                    end: 'top 20%',
                    scrub: true,
                    pin: true
                }
            })

            gsap.from('.brands',{
                x: -500,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.popularHead',
                    // markers: true,
                    start: 'top 30%',
                    end: 'top 10%',
                    scrub: true,
                    pin: true
                }
            })


            gsap.from('.policy',{
                x: -500,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.policy',
                    // markers: true,
                    start: 'top 30%',
                    end: 'top 10%',
                    scrub: true,
                    pin: true
                }
            })
    }
    
      
    
  }
</script>

<style scoped>

</style>
