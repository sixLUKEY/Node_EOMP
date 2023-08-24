<template>
    <div class="w-full featured my-6 py-6 flex gap-5 featuredProd">
        <div class="flex-[3] flex flex-col lg:justify-between">
            <h3 class="text-3xl lg:text-6xl">
                Cartier Rotonde de cartier
            </h3>
            <h4 class=" text-xl text-primary lg:text-4xl">
                Rose Gold Flying Tourbillon watch
            </h4>
            <div class="flex text-secondary lg:text-2xl">
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
            <div class="flex justify-between my-5 h-fit items-center lg:flex-col lg:items-start lg:gap-5">
                <p class=" text-3xl price lg:text-5xl">
                    R 1 133 161
                    <br>
                    <span class="text-lg text-secondary lg:text-2xl">
                        + R 2422 insured shipping
                    </span>
                </p>
                <button class=" bg-primary text-light px-3 text-lg h-full py-2 lg:h-fit">
                    Add to cart
                </button>
            </div>
            <div class="images lg:max-h-[100px]">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
                <img src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="">
            </div>
        </div>
        <div class="flex-[2] my-auto">
            <img class="mx-auto" src="https://i.postimg.cc/76rDtJhJ/27952660-xw3g7vbtu90zpzij6j9dd4mw-Extra-Large-cutout.png" alt="watch">
        </div>
    </div>
</template>

<script>

    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)

    export default {
        mounted(){
            let tl = gsap.timeline()

            // gsap.from('h3',{
            //     x: -500,
            //     scrollTrigger: {
            //         trigger: 'h3',
            //         markers: true,
            //         start: 'top top',
            //         scrub: true,
            //         pin: true
            //     }
            // })
            
        }
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
        max-height: 100%;
    }

    @media screen and (min-width: 1024px) {
        .price{
            line-height: 2rem;
        }

        img{
            max-height: 400px;
        }
    }

</style>