<template>
    <div class="flex flex-col gap-5 my-6">
        <table class="w-full text-center">
            <thead class="border-primary border-2 sm:text-xl">
                <tr>
                    <th class="py-3">ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="my-5" v-if="users">
                <AdminUser
                v-for="user of users"
                :key="user.userID"
                :user="user"
                />
            </tbody>
            <tbody class="my-5" v-else>
                <Loader/>
            </tbody>
           
        </table>
    </div>
</template>

<script>

    import AdminUser from '@/components/AdminUsers.vue';
    import Loader from '@/components/Loader.vue';

    export default {
        components: {
            AdminUser,
            Loader
        },
        computed: {
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch("fetchUsers")
        }
    }
</script>

<style scoped>

</style>