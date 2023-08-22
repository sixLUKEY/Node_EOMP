<template>
    <div class="brands border border-primary p-5 text-center my-6">
        <div>
            <img src="https://i.postimg.cc/ZRrKfWCs/pngwing-com-2023-08-21-T085115-471-cutout.png" alt="rolex">
        </div>
        <div>
            <img src="https://i.postimg.cc/Hss3CKb3/pngwing-com-2023-08-21-T085648-691-cutout.png" alt="cartier">
        </div>
        <div>
            <img src="https://i.postimg.cc/9Q1sPZCF/pngwing-com-2023-08-21-T092636-801.png" alt="mont blanc">
        </div>
        <div>
            <img src="https://i.postimg.cc/Sj0jrjFD/pngwing-com-2023-08-21-T093503-304-cutout.png" alt="tag heuer">
        </div>
        <div>
            <img src="https://i.postimg.cc/yNqGhHbn/pngwing-com-2023-08-21-T094106-202-cutout.png" alt="Audemars Piguet">
        </div>
        <div>
            <img src="https://i.postimg.cc/521XGHTC/pngwing-com-2023-08-21-T094742-971-cutout.png" alt="Seiko">
        </div>
        <div>
            <img src="https://i.postimg.cc/yN2vC4Rt/pngwing-com-2023-08-21-T095010-089-cutout.png" alt="Patek Philippe">
        </div>
        <div>
            <img src="https://i.postimg.cc/fLLZpdxB/pngwing-com-2023-08-21-T095320-124.png" alt="Hublot">
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

    .brands div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>