<template>
  <nav class="flex justify-between mx-5 py-5 items-end lg:mx-52 sticky top-0 bg-white z-50">
    <div class="logo">
      <img src="https://img.logoipsum.com/218.svg" alt="logo" />
    </div>
    <ul class="links flex text-lg gap-3 items-center lg:text-2xl">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
nav a {
  font-weight: bold;
  position: relative;
  transition: 0.2s;
}

nav a.router-link-exact-active {
  color: var(--primary-color);
  transition: 0.2s;
}

nav a.router-link-exact-active::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    bottom: 0;
    left: 0;
    transition: 0.2s;
}

</style>
