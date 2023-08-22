<template>
    <main class="flex flex-col">
        <h1 class="text-5xl flex items-center gap-2 mt-6">
            #255 <span class="text-secondary text-3xl ">|</span> Cartier
        </h1>
        <label for="name">name</label>
        <input type="text" id="name">
        <label for="model">model</label>
        <input type="text" id="model">
        <div class="grid adminGrid">
            <div class=" flex flex-col">
                <label for="price">price</label>
                <input type="text">
            </div>
            <div class=" flex flex-col">
                <label for="featured">featured</label>
                <select name="featured" id="featured">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="box">original box</label>
                <select name="box" id="box">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="papers">original papers</label>
                <select name="papers" id="papers">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="price">url 1</label>
                <input type="url">
            </div>
            <div class=" flex flex-col">
                <label for="price">url 2</label>
                <input type="url">
            </div>
            <div class=" flex flex-col">
                <label for="price">url 3</label>
                <input type="url">
            </div>
            <div class=" flex flex-col">
                <label for="url ">url 4</label>
                <input type="url">
            </div>
        </div>

        <button class="bg-primary w-fit text-light py-2 px-5 ms-auto my-5">
            Save Changes
        </button>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

select{
        padding: 0.125rem 0.25rem;
        border: 1px solid var(--primary-color);
        font-size: 1.25rem;
        border-radius: 0.125rem;
        min-width: 120px;
    }

    input{
        border: 1px solid var(--primary-color);
        border-radius: 0.125rem;
        padding: 0.25rem 0.75rem;
    }

    label{
        font-size: 1.875rem;
        margin-top: 1rem;
        color: var(--primary-color);
    }

    .adminGrid{
        grid-template-columns: repeat( 2, 1fr );
        gap: 0 1.25rem;
    }

</style>