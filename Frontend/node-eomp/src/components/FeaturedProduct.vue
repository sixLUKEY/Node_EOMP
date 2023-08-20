<template>
    <div class="w-full featured my-6 py-6 flex gap-5">
        <div class="flex-[3]">
            <h3 class="text-3xl">
                Cartier Rotonde de cartier
            </h3>
            <h4 class=" text-xl text-primary">
                Rose Gold Flying Tourbillon watch
            </h4>
            <div class="flex text-secondary">
                <p>
                    original box 
                </p>
                <span>
                    |
                </span>
                <p>
                    Original Papers
                </p>
            </div>
            <div class="flex justify-between my-5 h-fit items-center">
                <p class=" text-3xl price">
                    R 1 133 161
                    <br>
                    <span class="text-lg text-secondary">
                        + R 2422 insured shipping
                    </span>
                </p>
                <button class=" bg-primary text-light px-5 text-lg h-full py-2">
                    Add to cart
                </button>
            </div>
            <div class="images">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
            </div>
        </div>
        <div class="flex-[2] my-auto">
            <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="watch">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


    .featured{
        border: solid var(--secondary-color) 1px ;
        border-inline: 0;
    }

    .price{
        line-height: 1rem;
    }
    
    img {
        max-width: 100%;
        max-height: 100%;
    }

    .images{
        display: grid;
        grid-template-columns: repeat( 4, 1fr);
        grid-template-rows: repeat( 1 , 80px );
        gap: 0.75rem;
    }

    .images img{
        background-color: #d4d4d4;
        padding: 0.5rem;
        border-radius: 0.2rem;
    }

</style>