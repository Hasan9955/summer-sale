/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }




/* if (promoCode === 'SELL200' & totalNo >= 200) {
        button.removeAttribute('disabled')
        button.addEventListener('click', function () {
            const yourDiscount = Math.round(totalNo * 0.2)

            discountTotal.innerText = yourDiscount


            const total = totalNo - yourDiscount


            finalTotal.innerText = total
        })

    }
    else {
        button.setAttribute('disabled', true);
    } */