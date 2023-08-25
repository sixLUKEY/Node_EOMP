<template>
  <main class="my-12 min-h-[60vh]" >
    <div class="border border-primary rounded-md p-3 relative" v-if="product">
      <router-link
        to="/products"
        class="text-[#284B63]/70 text-xl flex items-center gap-2 cursor-pointer back w-fit lg:text-2xl"
      >
        <span
          ><svg
            width="10"
            height="15"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.12358 2.24285C8.57419 1.72976 8.57419 0.897894 8.12358 0.384812C7.67298 -0.128271 6.9424 -0.128271 6.4918 0.384812L0.337954 7.3919C0.112651 7.64844 0 7.98468 0 8.32092C0 8.49906 0.0311371 8.66892 0.0875524 8.82383C0.14386 8.97879 0.227327 9.12397 0.337954 9.24994L6.4918 16.257C6.9424 16.7701 7.67298 16.7701 8.12358 16.257C8.57419 15.7439 8.57419 14.9121 8.12358 14.399L3.93948 9.63475H18.8462C19.4834 9.63475 20 9.04653 20 8.32092C20 7.59531 19.4834 7.00709 18.8462 7.00709H3.93948L8.12358 2.24285Z"
              fill="#284B63"
              fill-opacity="0.7"
            /></svg></span
        >Back
      </router-link>
      <img
        class="logo absolute top-3 left-1/2"
        src="https://i.postimg.cc/3wkJGZtC/050-AFED4-02-F0-454-E-9-E3-D-65-FCB7-B8-E8-CD-cutout.png"
        alt="logo"
      />
      <img
        class="watermark absolute left-0 w-4/5 top-1/2"
        src="https://i.postimg.cc/3wkJGZtC/050-AFED4-02-F0-454-E-9-E3-D-65-FCB7-B8-E8-CD-cutout.png"
        alt="rolex"
      />
      <div class="flex">
        <div class="flex-[2] flex flex-col gap-2">
          <div class="mt-5">
            <h3 class="text-xl text-primary lg:text-5xl sm:text-2xl md:text-3xl">{{ product.prodName }}</h3>
            <p class="text-dark sm:text-xl md:text-2xl lg:text-2xl">{{ product.prodDesc }}</p>
            <p class="text-secondary text-sm sm:text-base lg:text-xl md:text-xl">
              original box | original papers &nbsp; &nbsp;
              <span class="text-black">Prod. {{ product.prodYear }}</span>
            </p>
          </div>
          <h3 class="text-xl sm:text-3xl my-4 lg:text-5xl">
            R {{ product.amount }}
            <span class="text-sm text-secondary lg:text-xl">
              +R 2422 insured shipping</span
            >
          </h3>
          <div class=" imgGrid gap-1 items-center">
            <button class=" rounded-sm bg-primary text-light p-2 h-fit">
              Add to Cart +
            </button>
            <div class="grid justify-end grid-cols-3 images">
              <img class="altImg p-1 flex-1 rounded-md" :src="product.prodUrl1" :alt="product.prodName">
              <img class="altImg p-1 flex-1 rounded-md" :src="product.prodUrl2" :alt="product.prodName">
              <img class="altImg p-1 flex-1 rounded-md" :src="product.prodUrl3" :alt="product.prodName">
            </div>
            
          </div>
        </div>
        <div class="flex-1 productImg">
          <img
          class="mx-auto"
            :src="product.prodUrl"
            :alt="product.prodName"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <Loader/>
    </div>

   
  </main>
</template>

<script>
import MoreProduct from "@/components/MoreProduct.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    MoreProduct,
    Loader
},
  props: [
    "id"
  ],
  computed: {
    product(){
      return this.$store.state.product
    }
  },
  mounted(){
    this.$store.dispatch("fetchProduct", this.id),
    this.$store.dispatch("fetchProducts")
  }
  
};
</script>

<style scoped>
.logo {
  max-height: 20px;
  transform: translateX(-50%);
}

.watermark {
  transform: translateY(-50%);
  opacity: 0.025;
  z-index: -5;
}

span {
  transition: 0.2s;
}

.back:hover span {
  transform: translateX(-3px);
}

.productImg img {
  height: 100%;
  object-fit: contain;
}

.imgGrid{
  display: grid;
  grid-template-columns: 100px 1fr;
}

.imgGrid div img{
  object-fit: cover;
}

h1 {
  height: 2rem;
}

img {
  max-height: 100%;
}

.moreContainer {
  border: 1px solid var(--primary-color);
  border-inline: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.nextButton {
  position: absolute;
  right: -3%;
  bottom: 50%;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #898a8bcb;
  transform: translateY(50%);
}

.altImg{
  max-height: 80px;
  object-fit: cover ;
}


@media screen and (min-width: 1024px) {
  .logo{
    max-height: 50px;
  }
  
  .productImg img{
    max-height: 400px;
  }
  
}
@media screen and (min-width: 1024px) {
  .moreContainer {
  grid-template-columns: repeat(3, 1fr);
}

@media screen and ( max-width: 400px ) {
    .images{
      height: 0px;
    }

    
}

}
</style>
