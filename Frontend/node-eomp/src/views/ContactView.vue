<template>
  <main class="my-auto flex flex-col lg:flex-row lg:gap-16">
    <Form class="lg:flex-1"/>
    <FAQ class="lg:flex-1"/>
  </main>
</template>

<script>

    import Form from '../components/Form.vue'
    import FAQ from '../components/FAQ.vue'

export default {
    components: {
        Form,
        FAQ
    },
    methods: {
        
    }
    

};
</script>

<style scoped>

    
</style>
