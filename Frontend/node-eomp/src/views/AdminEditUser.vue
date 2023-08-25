<template>
  <main class="flex flex-col" v-if="user">
    <h1 class="text-2xl sm:text-5xl flex items-center gap-2 mt-6">
      # {{ user.userID }} <span class="text-secondary  sm:text-3xl">|</span>
      {{ user.userProfile }}
    </h1>
    <label for="name">firstName</label>
    <input
      type="text"
      id="name"
      :placeholder="user.firstName"
      required
      v-model="user.firstName"
    />
    <label for="model">lastname</label>
    <input
      type="text"
      id="lastname"
      :placeholder="user.lastName"
      v-model="user.lastName"
      required
    />
    <div class="grid adminGrid">
      <div class="flex flex-col">
        <label for="age">Age</label>
        <input
          type="text"
          required
          :placeholder="user.userAge"
          v-model="user.userAge"
        />
      </div>
      <div class="flex flex-col">
        <label for="role">Role</label>
        <select name="role" id="role" v-model="user.userRole">
          <option value="admin">admin</option>
          <option value="user">user</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label for="gender">Gender</label>
        <select name="gender" id="gender" v-model="user.Gender">
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label for="email">Email Address</label>
        <input type="email" required v-model="user.emailAdd" />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div
        id="success"
        class="success bg-green-200 p-3 text-xl h-fit w-fit rounded-md"
      >
        User Successfully Updated ✅
      </div>
      <button
        class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5"
        @click="updateUser"
      >
        Save Changes
      </button>
    </div>
  </main>
  <main v-else>
    <Loader />
  </main>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      Gender: "",
      userRole: "",
      emailAdd: "",
    };
  },
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUser", this.id),
      this.$store.dispatch("fetchUsers");
  },
  methods: {
    async updateUser() {
      try {
        console.log(this.user);
        await axios.put(
          `https://eomp-backend.onrender.com/users/${this.$route.params.id}`,
          {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            userAge: this.user.userAge,
            Gender: this.user.Gender,
            userRole: this.user.userRole,
            emailAdd: this.user.emailAdd,
            userPass: this.user.userPass,
            userProfile: this.user.userProfile,
          }
        );
        console.log(this.userAge);
        this.firstName = "";
        this.lastName = "";
        this.userAge = "";
        this.Gender = "";
        this.userRole = "";
        this.emailAdd = "";
        const successPop = document.getElementById("success");
        successPop.classList.toggle("show");
        await new Promise((resolve) => {
          setTimeout(() => {
            this.$router.push("/admin/users");
            resolve();
          }, 2000);
        });
      } catch (error) {
        alert(error);
      }
    },
  },
};
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

.success{
    padding: 0.3rem;
}
}
</style>
