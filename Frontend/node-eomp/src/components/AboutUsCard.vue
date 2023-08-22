<template>
    <div class=" border-[2px] border-secondary p-5 flex flex-col gap-3 rounded-md">
        <div class="flex">
            <div class="flex-1">
                <img :src="url" alt="user">
            </div>
            <div class="flex-1 flex flex-col justify-evenly">
                <h3 class=" text-3xl">
                    {{ name }}
                </h3>
                <h4 class="text-2xl text-primary">
                    {{ role }}
                </h4>
                <p class=" text-lg">
                    {{ email }}
                </p>
            </div>
        </div>
        <p class=" text-lg">
            {{ msg }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            role: String,
            email: String,
            url: String,
            msg: String
        }
    }
</script>

<style scoped>

</style>