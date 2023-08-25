<template>
    <main class="flex flex-col" v-if="product">
        <h1 class="text-5xl flex items-center gap-2 mt-6">
            # {{ product.prodID }} <span class="text-secondary text-3xl ">|</span> {{ product.Category }}
        </h1>
        <label for="brand">Brand</label>
        <input type="text" id="brand" :placeholder=" product.Category " required v-model="product.Category">
        <label for="name">Name</label>
        <input type="text" id="name" :placeholder=" product.prodName " required v-model="product.prodName">
        <label for="model">Model</label>
        <input type="text" id="model" :placeholder=" product.prodDesc " v-model="product.prodDesc" required>
        <div class="grid adminGrid">
            <div class=" flex flex-col">
                <label for="price">Price</label>
                <input type="text" required :placeholder="product.amount" v-model="product.amount">
            </div>
            <div class=" flex flex-col">
                <label for="featured">featured</label>
                <select name="featured" id="featured" v-model="product.featuredProd">
                    <option value="0">false</option>
                    <option value="1">true</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="year">Production Year</label>
                <input type="number" required v-model="product.prodYear">
            </div>
            <div class=" flex flex-col">
                <label for="price">url 1</label>
                <input type="url" required v-model="product.prodUrl">
            </div>
            <div class=" flex flex-col">
                <label for="price">url 2</label>
                <input type="url" required v-model="product.prodUrl1">
            </div>
            <div class=" flex flex-col">
                <label for="price">url 3</label>
                <input type="url" required v-model="product.prodUrl2">
            </div>
            <div class=" flex flex-col">
                <label for="url ">url 4</label>
                <input type="url" required v-model="product.prodUrl3">
            </div>
        </div>
        <div class="flex justify-between items-center">
            <div
    id="success"
    class="success bg-green-200 p-3 text-xl h-fit w-fit rounded-md"
  >
    Product Successfully Updated ✅
  </div>
  <button class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5" @click="updateProduct">
      Save Changes
  </button>
        </div>
    </main>
    <main v-else>
        <Loader/>
    </main>
</template>

<script>

    import axios from 'axios'
    import Loader from '@/components/Loader.vue'

    export default {
        data(){
            return {
            prodName: '',
            prodDesc: '',
            amount: '',
            Category: '',
            prodYear: '',
            featuredProd: '',
            prodUrl: '',
            prodUrl1: '',
            prodUrl2: '',
            }
        },
        components: {
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
        },
        methods: {
            async updateProduct(){
                try {
                    // console.log( this.product.prodYear )
                    await axios.put(
                        `https://eomp-backend.onrender.com/products/${this.$route.params.id}`,
                        {
                            prodName: this.product.prodName,
                            prodDesc: this.product.prodDesc,
                            amount: this.product.amount,
                            Category: this.product.Category,
                            prodYear: this.product.prodYear,
                            featuredProd: this.product.featuredProd,
                            prodUrl: this.product.prodUrl,
                            prodUrl1: this.product.prodUrl1,
                            prodUrl2: this.product.prodUrl2,
                            prodUrl3: this.product.prodUrl3
                        }
                    )
                    this.prodName = ''
                    this.prodDesc = ''
                    this.amount = ''
                    this.Category = ''
                    this.prodYear = ''
                    this.featuredProd = ''
                    this.prodUrl = ''
                    this.prodUrl1 = ''
                    this.prodUrl2 = ''
                    this.prodUrl3 = ''
                    const successPop = document.getElementById("success");
        successPop.classList.toggle("show");
        await new Promise((resolve) => {
          setTimeout(() => {
            this.$router.push("/admin/products");
            resolve();
          }, 2000);
        });
                } catch ( error ){
                    alert( error )
                }
            }
        }
    }
</script>

<style scoped>

select{
        padding: 0.125rem 0.25rem;
        border: 1px solid var(--primary-color);
        font-size: 1.25rem;
        border-radius: 0.125rem;
        min-width: 120px;
    }

    input{
        border: 1px solid var(--primary-color);
        border-radius: 0.125rem;
        padding: 0.25rem 0.75rem;
    }

    label{
        font-size: 1.875rem;
        margin-top: 1rem;
        color: var(--primary-color);
    }

    .adminGrid{
        grid-template-columns: repeat( 2, 1fr );
        gap: 0 1.25rem;
    }

    .success {
        pointer-events: none;
  transition: 0.2s;
  z-index: 9999;
  opacity: 1;
  transform: translateX(-500px);
}

.show {
    opacity: 1;
    transform: translateX(0px);
}

@media screen and (max-width: 400px) {
    .adminGrid{
        grid-template-columns: 1fr;
    }
}

</style>