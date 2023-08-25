<template>
  <main class="my-12">
    <div class="flex flex-col gap-3">
      <div class="flex">
        <h1 class="text-5xl flex-1 lg:text-7xl aboutHead">About Us</h1>
        <img
          src="https://i.postimg.cc/3wkJGZtC/050-AFED4-02-F0-454-E-9-E3-D-65-FCB7-B8-E8-CD-cutout.png"
          alt="logo"
          class="flex-1 max-h-[100%] h-16 aboutImg object-contain"
        />
      </div>
      <p class="text-primary text-lg lg:text-xl aboutSub">
        Another Time is where time becomes art. We're passionate about crafting exquisite timepieces that blend precision with timeless elegance. Welcome to our world, where every tick tells a story.
      </p>
    </div>
    <section class="flex flex-col my-12 gap-5 cardSection">
      <AboutCard
        class="card1"
        title="Mission"
        msg="At Another Time, our mission is to empower individuals to embrace and celebrate time as an expression of their unique style and journey. We achieve this by curating and creating exceptional timepieces that blend craftsmanship, innovation, and elegance to inspire moments of lasting beauty.  "
      />
      <AboutCard
        class="card2"
        title="Vision"
        msg="Our vision at Another Time is to redefine how the world perceives and interacts with time. We aim to be a global beacon of horological excellence, constantly pushing boundaries to offer timepieces that not only measure time but also serve as timeless companions, treasured for generations."
      />
      <AboutCard
        class="card3"
        title="values"
        msg="At Another Time, our values drive us: Craftsmanship in every detail, Elegance in every moment, Innovation in every creation, Sustainability in every practice, Customer Focus in every interaction, Heritage in every design, Passion in every heartbeat, and Integrity in every relationship. These values guide us in crafting timepieces that transcend mere measurement, becoming cherished companions on life's journey."
      />
    </section>
    <section class="my-12 flex flex-col gap-5 aboutSection">
      <AboutUsCard
      class="about1"
        url="https://i.postimg.cc/XYLdvNwP/C12-Luke-Evertson-4-copy-min.jpg"
        name="Luke Evertson"
        role="Frontend Maestro"
        email="Luke123456789@gmail.com"
        msg="Luke is our digital artist, painting pixels with precision to create the stunning visual tapestry that defines Another Time. With an eye for detail and a passion for user experience, he's the mastermind behind the captivating designs that draw you into our world of horological elegance. Luke's creativity knows no bounds, and he ensures that every click is a visual delight."
      />
      <AboutUsCard
      class="about2"
        url="https://i.postimg.cc/Yq1QJzjM/Rayyaan-Ethan-28-copy-min.png"
        name="Ethan Lesar"
        role="Backend Virtuoso"
        email="EthanL7@gmail.com"
        msg="Ethan is our coding virtuoso, working tirelessly behind the scenes to make everything tick flawlessly. He's the architect of our digital infrastructure, ensuring that the gears of our website turn smoothly. With his dedication to efficiency and a knack for problem-solving, Ethan ensures that your interactions with Another Time are seamless, secure, and reliable. His code is the backbone that supports our horological journey."
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
@media screen and (max-width:400px) {
  .aboutImg{
    display: none;
  }
}
</style>
