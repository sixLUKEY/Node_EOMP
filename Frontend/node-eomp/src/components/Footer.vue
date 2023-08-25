<template>
    <footer class="p-5 bg-dark  flex flex-col gap-5 lg:px-52">
        <div class=" text-light flex justify-between lg:text-xl">
            <p>
                copyright &copy; 2023
            </p>
            <ul class="flex underline gap-3">
                <li class="faqs">
                    <router-link to="/contact">
                        Frequently asked questions
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        Contact us
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="flex text-secondary justify-between lg:text-lg">
            <ul class=" flex text-sm gap-3">
                <li>Data Privacy</li>
                <li>Manage Cookies</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @media screen and (max-width:400px) {
  .faqs{
    display: none;
  }
}
</style>