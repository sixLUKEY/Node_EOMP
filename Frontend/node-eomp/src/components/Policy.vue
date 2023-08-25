<template>
    <div class="w-full flex bg-primary text-light policy relative">
        <div class="p-5 flex flex-col gap-3 z-20 w-full h-full">
            <h3 class=" text-3xl lg:text-5xl">
                Our buyer protection policy
            </h3>
            <ol class=" ps-5 text-lg lg:text-2xl">
                <li class="list-disc">Payment via the abcdefg service</li>
                <li class="list-disc">Authenticity guarantee</li>
                <li class="list-disc">Global money - back guarantee</li>
                <li class="list-disc">insured sipments</li>
                <li class="list-disc">ABCDEFG's 24 hour security team</li>
            </ol>
            <button class=" text-white bg-transparent border border-light rounded-sm py-2 px-2 lg:text-2xl">
                Learn more about security and conditions
            </button>
        </div>
            <img class="sm:w-full" src="https://i.postimg.cc/8z9VsX8V/glenn-carstens-peters-npx-XWg-Q33-ZQ-unsplash-1.png" alt="glen">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    

    img {
        max-width: 100%;
        /* max-height: 100%; */
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
    }

    .policy{
        overflow: hidden;
    }

   .policy div{
    background-color: #000000b8;
   }

   @media screen and ( max-width: 400px ) {
        h3{
            font-size: 1.4rem;
        }

        li{
            font-size: 1rem;
        }
    }

</style>