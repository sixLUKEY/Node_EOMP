<template>
    <tr class="text-lg border-black/10 border-b-2">
    <th class="py-8">{{ product.prodID }}</th>
    <td class="max-w-[100px]">{{ product.prodName }}</td>
    <td class="max-w-[100px] model">
        {{ product.prodDesc }}
    </td>
    <td>
        {{ product.prodYear }}
    </td>
    <td>{{ product.amount }}</td>
    <td class="gap-5 items-center">
      <router-link :to="{name: 'admin edit', params:{id:product.prodID}}" class="text-green-400">Edit</router-link> / <button class="text-red-400" @click="deleteProduct( product.prodID )" >Delete</button>
    </td>
  </tr>
</template>

<script>

  import axios from 'axios'

    export default {
        props: [
          "product"
        ],
        methods: {
          async deleteProduct( id ){
            try {
              await axios.delete(`https://eomp-backend.onrender.com/products/${id}`)
              this.$store.dispatch("fetchProducts")
              alert('succesfully deleted')
            } catch ( error ){
              alert ( error )
            }
          }
        }
    }
</script>

<style scoped>
  @media screen and ( max-width: 640px ) {
        .model{
            display: none;
        }
    }
</style>