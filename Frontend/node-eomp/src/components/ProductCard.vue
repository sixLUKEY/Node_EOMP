<template>
    <router-link :to="{name:'product', params:{id:product.prodID}}" class=" border border-primary flex flex-col justify-between items-center px-2 py-3 rounded-md gap-2 product">
            <div class="imgContainer">
                <img :src="product.prodUrl" :alt="product.prodName">
            </div>
            <h2 class=" text-4xl relative">
                {{ product.category }}
            </h2>
            <p class=" text-lg text-dark text-center">
                {{ product.prodName }}
                <span class=" text-primary">
                    - {{ product.prodDesc }}
                </span>
            </p>
            <p class="text-3xl">
                R {{ product.amount }}
            </p>
            <span class="mt-3">
                <img src="../assets/Icon.svg" alt="arrow">
            </span>
    </router-link>
</template>

<script>


    export default {
        
        props: [
            "product"
        ]
        

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