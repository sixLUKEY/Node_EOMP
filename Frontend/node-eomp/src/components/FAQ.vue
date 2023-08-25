<template>
    <div class="flex flex-col gap-6 my-12">
        <h2 class="text-3xl relative w-fit ">
            Frequently asked questions
        </h2>

        <div class="flex items-center gap-5 w-full border-primary border p-2 rounded-sm">
            <span class="text-5xl text-primary">Q</span>
            <select name="faq" id="faq" class="text-2xl flex-1 text-center" v-model="selected">
                <option value="Ordering with Another Time is easy. Simply browse our collection, select the watch you desire, and click 'Add to Cart.'' Proceed to the checkout, where you can enter your shipping and payment details. Once your order is confirmed, you'll receive an email notification, and we'll take care of the rest.">How do I place an order with Another Time?</option>
                <option value="We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Rest assured that our payment process is secure to protect your sensitive information.">What payment methods do you accept?</option>
                <option value="Absolutely! Once your order is shipped, you will receive a tracking number via email. You can use this number to monitor the progress of your package and estimate its delivery date.">Can I track my order?</option>
                <option value="We want you to be completely satisfied with your purchase. If, for any reason, you're not happy with your order, you can return it within 30 days of receiving it for a full refund or exchange. Please refer to our Return Policy for detailed instructions and eligibility criteria.">What is your return policy?</option>
                <option value="Yes, we offer a warranty on all our timepieces. The duration of the warranty may vary by product, but it typically covers manufacturing defects and issues that may arise under normal use. Please review the product's warranty information provided with your purchase for specific details or contact our customer support for assistance.">Are your watches covered by a warranty?</option>
            </select>
        </div>

        <div class="w-full border border-primary flex p-2 items-center gap-5 rounded-sm">
            <span class="text-5xl text-primary">
                A
            </span>
            <div class="text-lg">
                {{ selected }}
            </div>
        </div>

        <p class="text-lg flex gap-2">
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25003 10C7.25003 7.37665 9.37667 5.25 12 5.25C14.6234 5.25 16.75 7.37665 16.75 10C16.75 12.6234 14.6234 14.75 12 14.75C9.37667 14.75 7.25003 12.6234 7.25003 10ZM12 6.75C10.2051 6.75 8.75003 8.20507 8.75003 10C8.75003 11.7949 10.2051 13.25 12 13.25C13.795 13.25 15.25 11.7949 15.25 10C15.25 8.20507 13.795 6.75 12 6.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.52439 8.85685C3.87872 4.55824 7.47087 1.25 11.7841 1.25H12.216C16.5292 1.25 20.1213 4.55824 20.4757 8.85685C20.666 11.166 19.9527 13.4589 18.4861 15.2526L13.693 21.1144C12.818 22.1845 11.1821 22.1845 10.307 21.1144L5.51399 15.2526C4.04733 13.4589 3.33405 11.166 3.52439 8.85685ZM11.7841 2.75C8.25152 2.75 5.30952 5.45948 5.01932 8.98008C4.8609 10.9019 5.45455 12.8102 6.67521 14.3031L11.4683 20.1649C11.7431 20.501 12.2569 20.501 12.5318 20.1649L17.3248 14.3031C18.5455 12.8102 19.1391 10.9019 18.9807 8.98008C18.6905 5.45948 15.7485 2.75 12.216 2.75H11.7841Z" fill="black"/>
</svg>  
            </span>
            6 Academia lane, square Enix Resort, Utopia, 7557
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                selected: ''
            }
        } 
    }
</script>

<style scoped>

    h2::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #AFAFAF;
    }

</style>