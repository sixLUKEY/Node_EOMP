<template>
    <div class=" border-[2px] border-primary w-full text-center rounded-sm flex flex-col items-center gap-2 p-3">
        <h2 class="text-3xl">
            Our {{ title }}
        </h2>
        <div class="flex justify-between items-center gap-3 w-[70%] ">
            <div class="flex-1 h-[1px] bg-[#284B63]/50 rounded-full">

            </div>
            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="4.5" x2="17" y2="4.5" stroke="#284B63" stroke-opacity="0.5"/>
<line x1="8.5" y1="10" x2="8.5" y2="2.18557e-08" stroke="#284B63" stroke-opacity="0.5"/>
</svg>
            <div class="flex-1 h-[1px] bg-[#284B63]/50 rounded-full">

            </div>
        </div>
        <p>
            {{ msg }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            msg: String
        } 
            
        
    }
</script>

<style scoped>
    


</style>