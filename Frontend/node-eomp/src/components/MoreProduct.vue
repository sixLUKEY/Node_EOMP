<template>
    <div class="flex p-2 moreProduct relative">
        <div class=" h-[120px]">
            <img src="https://i.postimg.cc/dQh0Pn3r/26752609-57j7g6e7894cq1h88cgqwjse-Extra-Large-1-cutout.png" alt="watch">
        </div>
        <div class="flex flex-col justify-between items-end">
            <div class="text-end">
                <h3 class="text-2xl">
                    Drive de cartier
                </h3>
                <p class="text-lg text-primary">
                    3930 / wsnm0006
                </p>
            </div>
            <p class="text-3xl">
                R 97 642
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    img{
        max-height: 100%;
    }

    .moreProduct::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        height: 50%;
        width: 1px;
        background-color: rgb(198, 197, 197);
        transform: translateY(-50%);
    }

</style>