<template>
    <router-link to="/product" class=" border border-primary flex flex-col justify-between items-center px-2 py-3 rounded-md gap-2 product">
            <div class="imgContainer">
                <img src="https://i.postimg.cc/HWQY3fFZ/pngwing-com-2023-08-21-T111413-851.png" alt="Rolex">
            </div>
            <h2 class=" text-4xl relative">
                Rolex
            </h2>
            <p class=" text-lg text-dark">
                Day-Date 40
                <span class=" text-primary">
                    - Onyx dial 2023
                </span>
            </p>
            <p class="text-3xl">
                R 1 038 202
            </p>
            <span class="mt-3">
                <img src="../assets/Icon.svg" alt="arrow">
            </span>
    </router-link>
</template>

<script>


    export default {
        components: {
            
        }
    }
</script>

<style scoped>


    .product{
        transition: 0.2s;
    }

    .product:hover{
        /* background-color: #eeeeef7c; */
        border: solid 1px #000000b9;
        box-shadow: -2px 5px 5px 0px rgba(0,0,0,0.2);
        scale: 1.008;
    }


    .product:hover span{
        transform: translateY(-5px);
    }

    span{
        transition: 0.2s;
    }

    .imgContainer {
        max-height: 120px;
    }

    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    h2::after{
        content: '';
        position: absolute;
        width: 50%;
        height: 1px;
        background-color: #b9b9b9;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

</style>