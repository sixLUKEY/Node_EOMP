<template>
  <main class="flex flex-col">
    <label for="brand" class="text-3xl">Brand</label>
    <select
      name="brand"
      id="brand"
      class="text-xl border border-primary rounded-sm"
      v-model="Category"
    >
      <option value="cartier">cartier</option>
      <option value="rolex">rolex</option>
      <option value="audemars piguet">audemars piguet</option>
      <option value="patek philippe">Patek Philippe</option>
      <option value="mont blanc">mont blanc</option>
      <option value="tag heuer">tag heuer</option>
      <option value="Hublot">Hublot</option>
      <option value="Seiko">Seiko</option>
    </select>
    <label for="name">name</label>
    <input type="text" maxlength="255" autocomplete="off" required v-model="prodName" id="name" />
    <label for="model">model</label>
    <input type="text" id="model" maxlength="255" autocomplete="off" required v-model="prodDesc"/>
    <div class="grid adminGrid">
      <div class="flex flex-col">
        <label for="price">price</label>
        <input type="text" autocomplete="off" required v-model="amount"/>
      </div>
      <div class="flex flex-col">
        <label for="featured">featured</label>
        <select name="featured" id="featured" v-model="featuredProd">
          <option value="0">false</option>
          <option value="1">true</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label for="Year">Production Year</label>
        <input type="number" autocomplete="off" required v-model="prodYear">
      </div>
      <div class="flex flex-col">
        <label for="price">url 1</label>
        <input type="url" autocomplete="off" required v-model="prodUrl"/>
      </div>
      <div class="flex flex-col">
        <label for="price">url 2</label>
        <input type="url" autocomplete="off" required v-model="prodUrl1"/>
      </div>
      <div class="flex flex-col">
        <label for="price">url 3</label>
        <input type="url" autocomplete="off" required v-model="prodUrl2"/>
      </div>
      <div class="flex flex-col">
        <label for="url ">url 4</label>
        <input type="url" autocomplete="off" required v-model="prodUrl3"/>
      </div>
    </div>

    <div class=" flex justify-between items-center">
      <div
        id="success"
        class="success bg-green-200 p-3 text-xl h-fit w-fit rounded-md"
      >
        Product Successfully Added ✅
      </div>
      <button class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5" @click="addProduct">
        submit
      </button>
    </div>
  </main>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            prodName: '',
            prodDesc: '',
            amount: '',
            Category: '',
            featuredProd: '',
            prodUrl: '',
            prodUrl1: '',
            prodUrl2: '',
            prodUrl3: '',
            prodYear: '',
        }
    },
    methods: {
        async addProduct(){
            try {
                await axios.post('https://eomp-backend.onrender.com/products',{
                    prodName: this.prodName,
            prodDesc: this.prodDesc,
            amount: this.amount,
            Category: this.Category,
            featuredProd: this.featuredProd,
            prodUrl: this.prodUrl,
            prodUrl1: this.prodUrl1,
            prodUrl2: this.prodUrl2,
            prodUrl3: this.prodUrl3,
            prodYear: this.prodYear,
                })
                this.prodName = ''
                this.prodDesc = ''
                this.amount = ''
                this.Category = ''
                this.featuredProd = ''
                this.prodUrl = ''
                this.prodUrl1 = ''
                this.prodUrl2 = ''
                this.prodUrl3 = ''
                this.prodYear = ''
                const successPop = document.getElementById("success");
        successPop.classList.toggle("show");
        await new Promise((resolve) => {
          setTimeout(() => {
            this.$router.push("/admin/products");
            resolve();
          }, 2000);
        });
            } catch ( error ){
                alert ( err )
            }
        }
    }
}
</script>

<style scoped>
select {
  padding: 0.125rem 0.25rem;
  border: 1px solid var(--primary-color);
  font-size: 1.25rem;
  border-radius: 0.125rem;
  min-width: 120px;
}

input {
  border: 1px solid var(--primary-color);
  border-radius: 0.125rem;
  padding: 0.25rem 0.75rem;
}

label {
  font-size: 1.875rem;
  margin-top: 1rem;
  color: var(--primary-color);
}

.adminGrid {
  grid-template-columns: repeat(2, 1fr);
  gap: 0 1.25rem;
}

.success {
  transform: translateX(-500px);
  transition: 0.2s;
  z-index: 9999;
}

.show {
  transform: translateX(0px);
}

@media screen and (max-width:400px) {
  .adminGrid{
    grid-template-columns: 1fr;
  }
}
</style>
