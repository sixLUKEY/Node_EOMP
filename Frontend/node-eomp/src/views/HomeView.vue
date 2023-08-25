<template>
  <main class="my-12">
    <header class="flex">
      <div class="flex-[5] flex flex-col gap-5">
        <h1 class="text-5xl sm:text-6xl md:text-6xl w-fit lg:text-7xl heading">Timeless Timepieces</h1>
        <p class="w-[80%] sm:text-2xl text-primary lg:text-2xl subHeading">
          Elevate Your Style with Another Time: Unveiling a Diverse Selection of
          Exquisite Watches to Suit Every Occasion and Taste
        </p>
        <div class="flex gap-5 lg:text-2xl">
          <router-link
            to="/products"
            class="bg-primary text-light px-3 py-1 rounded-sm btn1 flex justify-center items-center"
          >
            Shop Now
          </router-link>
          <router-link
            to="/contact"
            class="border border-primary px-3 text-primary btn2 flex justify-center items-center"
          >
            Contact Us
          </router-link>
        </div>
      </div>
      <div class="flex-[2] my-auto landImg">
        <img
          class="h-full"
          src="https://i.postimg.cc/q7q182Yd/image-processing20200316-9261-wz1zrt-min-cutout-min.png"
          alt="watch"
        />
      </div>
    </header>

    <div class="main__action text-center my-24">
      <a class="main__scroll" href="#featuredSection">
        <div class="main__scroll-box">
          <svg
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              fill="rgba(28,28,30,1)"
            ></path>
          </svg>
        </div>

        <span class="text-[##1c1c1e]">Scroll</span>
      </a>
    </div>

    <section class="my-16" id="featuredSection">
      <h2 class="text-center text-4xl lg:text-6xl featuredHead">
        Featured Piece
      </h2>
      <FeaturedProduct />
    </section>

    <section>
      <h2 class="text-center text-4xl lg:text-6xl popularHead">
        Popular Brands
      </h2>
      <BrandContainer />
    </section>

    <section class="my-24 policy">
      <Policy />
    </section>
  </main>
</template>

<script>
import FeaturedProduct from "@/components/FeaturedProduct.vue";
import BrandContainer from "@/components/BrandContainer.vue";
import Policy from "@/components/Policy.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    FeaturedProduct,
    BrandContainer,
    Policy,
  },
  mounted() {
    let tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.from(".heading", { opacity: 0, y: -70 })
      .from(".subHeading", { opacity: 0, x: -50 }, "-=0.2")
      .from(".landImg", { opacity: 0, x: 100 }, "-=0.625")
      .from(".btn1", { opacity: 0, y: 70, duration: 0.25 })
      .from(
        ".btn2",
        { opacity: 0, y: 70, duration: 1, ease: "elastic.out(1, 0.4)" },
        "-=0.1"
      )
      .from(".main__action", { opacity: 0, y: -70, duration: 0.5})

    gsap.from(".featuredProd", {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".featuredHead",
        // markers: true,
        start: "top 20%",
        end: "top 0%",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(".featuredHead", {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".featuredHead",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(".popularHead", {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".popularHead",
        // markers: true,
        start: "top 40%",
        end: "top 20%",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(".brands", {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".popularHead",
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(".policy", {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".policy",
        // markers: true,
        start: "top 30%",
        end: "top 10%",
        scrub: true,
        pin: true,
      },
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.landImg img {
  filter: drop-shadow(-12px 20px 8px #000);
}

.main__scroll-text {
  color: rgba(28, 28, 30, 1);
}

.main__action:hover .main__scroll-box {
  animation: scroll-down 3s infinite;
} 


.btn1:hover{
  background-color: #284b63c3;
}

.btn2:hover{
  background-color: #284b6310;
}

@keyframes scroll-down {
  0%,
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }

  35% {
    transform: translateY(1rem);
    opacity: 0;
  }

  70% {
    transform: translateY(-1rem);
    opacity: 0;
  }
}
</style>
