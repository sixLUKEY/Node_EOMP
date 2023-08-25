<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>

  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    }
  }

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#app {
  font-family: 'Bebas Neue', sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root{
  --primary-color: #284B63;
  --secondary-color: #A2A2A2;
  --dark: #353535;
  --light: #FFFFFF;
}

::-webkit-scrollbar{
  display: none;
}


main{
  margin: 0 1.25rem;
}

@media screen and ( min-width: 1024px ) {
  main{
    margin: 0 13rem;
  }
}

</style>
