<template>
  <main class="my-12">
    <div class="flex flex-col gap-3">
      <div class="flex">
        <h1 class="text-5xl flex-1">About Us</h1>
        <img
          src="https://img.logoipsum.com/218.svg"
          alt="logo"
          class="flex-1"
        />
      </div>
      <p class="text-primary text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        molestiae enim tempore ab odit cum consequuntur at tempora eius
        voluptatem.
      </p>
    </div>
    <section class="flex flex-col my-12 gap-5">
      <AboutCard
        title="Vision"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae enim tempore ab odit cum consequuntur at tempora eius voluptatem."
      />
      <AboutCard
        title="Mission"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae enim tempore ab odit cum consequuntur at tempora eius voluptatem."
      />
      <AboutCard
        title="values"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae enim tempore ab odit cum consequuntur at tempora eius voluptatem."
      />
    </section>
    <section class="my-12 flex flex-col gap-5">
      <AboutUsCard
        url="https://i.postimg.cc/tRt4bB2D/User.png"
        name="Luke Evertson"
        role="Frontend"
        email="marcoslukerojo@gmail.com"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab hic asperiores explicabo quae molestias itaque. Tempora vitae animi repudiandae?"
      />
      <AboutUsCard
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

export default {
  components: {
    AboutCard,
    AboutUsCard,
  },
};
</script>

<style scoped></style>
