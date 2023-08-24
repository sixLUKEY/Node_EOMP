<template>
  <main class="my-12">
    <div class="flex flex-col gap-3">
      <div class="flex">
        <h1 class="text-5xl flex-1 lg:text-7xl aboutHead">About Us</h1>
        <img
          src="https://img.logoipsum.com/218.svg"
          alt="logo"
          class="flex-1 max-h-[100%] h-10 aboutImg"
        />
      </div>
      <p class="text-primary text-lg lg:text-xl aboutSub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        molestiae enim tempore ab odit cum consequuntur at tempora eius
        voluptatem.
      </p>
    </div>
    <section class="flex flex-col my-12 gap-5 cardSection">
      <AboutCard
        class="card1"
        title="Vision"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae enim tempore ab odit cum consequuntur at tempora eius voluptatem."
      />
      <AboutCard
        class="card2"
        title="Mission"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae enim tempore ab odit cum consequuntur at tempora eius voluptatem."
      />
      <AboutCard
        class="card3"
        title="values"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae enim tempore ab odit cum consequuntur at tempora eius voluptatem."
      />
    </section>
    <section class="my-12 flex flex-col gap-5 aboutSection">
      <AboutUsCard
      class="about1"
        url="https://i.postimg.cc/tRt4bB2D/User.png"
        name="Luke Evertson"
        role="Frontend"
        email="marcoslukerojo@gmail.com"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab hic asperiores explicabo quae molestias itaque. Tempora vitae animi repudiandae?"
      />
      <AboutUsCard
      class="about2"
        url="https://i.postimg.cc/tRt4bB2D/User.png"
        name="Ethan Lesar"
        role="Backend"
        email="EthanL7@gmail.com"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab hic asperiores explicabo quae molestias itaque. Tempora vitae animi repudiandae?"
      />
    </section>
  </main>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue";
import AboutUsCard from "@/components/AboutUsCard.vue";
import { gsap } from "gsap";

export default {
  components: {
    AboutCard,
    AboutUsCard,
  },
  mounted() {
    let tl = gsap.timeline({ defaults: { duration: 0.625 } });

    tl.from(".aboutHead", { opacity: 0, y: -100})
      .from(".aboutImg", { opacity: 0, x: 200}, "-=0.2")
      .from(".aboutSub", { opacity: 0, x: -200}, "-=0.3")
      .from(".card1", { opacity: 0, duration: 1.5 })
      .from(".card2", { opacity: 0, duration: 1.5  }, "-=1.225")
      .from(".card3", { opacity: 0, duration: 1.5  }, "-=1.225")
      .from(".about1", { opacity: 0, x: -200}, "-=1.2")
      .from(".about2", { opacity: 0, x: 200}, "-=1.2")
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .cardSection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .aboutSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
