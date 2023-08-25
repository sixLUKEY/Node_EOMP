<template>
    <tr class="text-lg border-black/10 border-b-2">
    <th class="py-8">{{ user.userID }}</th>
    <td class="">{{ user.firstName }}</td>
    <td class="">
        {{ user.lastName }}
    </td>
    <td>
        {{ user.userAge }}
    </td>
    <td>{{ user.Gender }}</td>
    <td v-if="user.userRole === 'admin' " class="text-red-500">{{ user.userRole }}</td>
    <td v-else>{{ user.userRole }}</td>
    <td class="gap-5 items-center">
      <router-link :to="{name:'admin user edit', params:{id:user.userID} }" class="text-green-400">Edit</router-link> / <button class="text-red-400" @click="deleteUser( user.userID )" >Delete</button>
    </td>
  </tr>
</template>

<script>

  import axios from 'axios'

    export default {
        props: [
          "user"
        ],
        methods: {
          async deleteUser( id ){
            try {
              await axios.delete(`https://eomp-backend.onrender.com/users/${id}`)
              this.$store.dispatch("fetchUsers")
            } catch ( error ){
              alert ( error )
            }
          }
        }
    }
</script>

<style scoped>

</style>