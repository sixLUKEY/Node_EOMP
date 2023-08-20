<template>
    <div class="brands border border-primary p-5 text-center my-6">
        <div>
            item
        </div>
        <div>
            item
        </div>
        <div>
            item
        </div>
        <div>
            item
        </div>
        <div>
            item
        </div>
        <div>
            item
        </div>
        <div>
            item
        </div>
        <div>
            item
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


    .brands{
        display: grid;
        grid-template-columns: repeat( 4, 1fr );
        grid-template-rows: repeat( 2, 1fr );
        gap: 1.25rem;
    }

</style>