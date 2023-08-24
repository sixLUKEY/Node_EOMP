<template>
    <form action="" class="flex flex-col">
      <div class="flex gap-5 my-5">
        <h1 class="text-5xl formHeading">Contact Us</h1>
        <div class="flex justify-between items-center gap-3 flex-1 border1">
          <div class="flex-1 h-[1px] bg-[#284B63]/50 rounded-full"></div>
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="4.5"
              x2="17"
              y2="4.5"
              stroke="#284B63"
              stroke-opacity="0.5"
            />
            <line
              x1="8.5"
              y1="10"
              x2="8.5"
              y2="2.18557e-08"
              stroke="#284B63"
              stroke-opacity="0.5"
            />
          </svg>
          <div class="flex-1 h-[1px] bg-[#284B63]/50 rounded-full"></div>
        </div>
      </div>
      <div class="input1">

        <input type="text" class="w-full rounded-sm p-2 text-black" name="name" id="name" placeholder=" " required>
        <div class="label" >
          Fullname
        </div>
      </div>
      <div class="input2">

        <input type="text" class="w-full rounded-sm p-2 text-black " id="email" placeholder=" " required>
        <div class="label">
              Email
            </div>
      </div>
      <textarea placeholder="Leave a message" class="w-full p-2 relative input3" name="message" id="message" cols="30" rows="10" required></textarea>

      <div class="flex gap-5">
        <div class="flex justify-between items-center gap-3 flex-1 border2">
          <div class="flex-1 h-[1px] bg-[#284B63]/50 rounded-full"></div>
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="4.5"
              x2="17"
              y2="4.5"
              stroke="#284B63"
              stroke-opacity="0.5"
            />
            <line
              x1="8.5"
              y1="10"
              x2="8.5"
              y2="2.18557e-08"
              stroke="#284B63"
              stroke-opacity="0.5"
            />
          </svg>
          <div class="flex-1 h-[1px] bg-[#284B63]/50 rounded-full"></div>
        </div>
          <button type="submit" class="bg-primary text-light my-6 w-fit px-5 py-1 rounded-sm text-lg self-end submit">
            Submit
          </button>
      </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

input, textarea{
        background-color: #F0F0F0;
    }

    .label{
        transform: translate(0.5rem, -2rem);
        width: fit-content;
        transition: all 0.2s ease-out;
        background-color: #F0F0F0;
        
    }

    input:focus + .label,
    input:not(:placeholder-shown) + .label{
        transform: translate(-0.05rem, -3.5rem);
        color: var(--primary-color);
    }

    ::placeholder{
        color: black;
    }

    @media screen and (min-width: 1024px) {
      .label{
        font-size: 1rem;
      }

    }

</style>