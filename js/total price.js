

document.getElementById('first-card').addEventListener('click', function () {
    const listContainer = document.getElementById('list-of-item')
    const li = document.createElement('li')
    li.innerText = "K. Accessories"
    li.classList.add('item')
    listContainer.appendChild(li)

    // get the card price value 
    const cardPrice = document.getElementById('first-card-price')
    const cardPriceString = cardPrice.innerText
    const cardPriceNumber = parseFloat(cardPriceString)



    // get the total price 
    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const totalNo = cardPriceNumber + priceTotalNumber

    priceTotal.innerText = totalNo

    // get discount




    // promo code use
    const promoCodeU = document.getElementById('promo-code')
    const promoCode = promoCodeU.value


    const button = document.getElementById('apply-but')
    if (promoCode === 'SELL200' && totalNo >= 200) {
        button.removeAttribute('disabled')
        
    }
    else {
        button.setAttribute('disabled', true);
    }
    


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total




    if (finalTotal.innerText > 0) {
        const purchaseBut = document.getElementById('purchase-but')
        purchaseBut.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }



})






// when clicked second card


document.getElementById('second-card').addEventListener('click', function () {
    const listContainer = document.getElementById('list-of-item')
    const li = document.createElement('li')
    li.innerText = "K. Accessories"
    li.classList.add('item')
    listContainer.appendChild(li)

    // get the card price value 
    const cardPrice = document.getElementById('second-card-price')
    const cardPriceString = cardPrice.innerText
    const cardPriceNumber = parseFloat(cardPriceString)



    // get the total price 
    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const totalNo = cardPriceNumber + priceTotalNumber

    priceTotal.innerText = totalNo

    // get discount




    // promo code use
    const promoCodeU = document.getElementById('promo-code')
    const promoCode = promoCodeU.value


    const button = document.getElementById('apply-but')
    if (promoCode === 'SELL200' && totalNo >= 200) {
        button.removeAttribute('disabled')
        
    }
    else {
        button.setAttribute('disabled', true);
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total



    if (finalTotal.innerText > 0) {
        const purchaseBut = document.getElementById('purchase-but')
        purchaseBut.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }

})







// when third card clicked 


document.getElementById('third-card').addEventListener('click', function () {
    const listContainer = document.getElementById('list-of-item')
    const li = document.createElement('li')
    li.innerText = "Home Cooker"
    li.classList.add('item')
    listContainer.appendChild(li)

    // get the card price value 
    const cardPrice = document.getElementById('third-card-price')
    const cardPriceString = cardPrice.innerText
    const cardPriceNumber = parseFloat(cardPriceString)



    // get the total price 
    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const totalNo = cardPriceNumber + priceTotalNumber

    priceTotal.innerText = totalNo


    // get discount




    // promo code use
    const promoCodeU = document.getElementById('promo-code')
    const promoCode = promoCodeU.value


    const button = document.getElementById('apply-but')
    if (promoCode === 'SELL200' && totalNo >= 200) {
        button.removeAttribute('disabled')
        
    }
    else {
        button.setAttribute('disabled', true);
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total



    if (finalTotal.innerText > 0) {
        const purchaseBut = document.getElementById('purchase-but')
        purchaseBut.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }


})








// when forth card clicked


document.getElementById('forth-card').addEventListener('click', function () {
    const listContainer = document.getElementById('list-of-item')
    const li = document.createElement('li')
    li.innerText = "Sports Back Cap"
    li.classList.add('item')
    listContainer.appendChild(li)

    // get the card price value 
    const cardPrice = document.getElementById('forth-card-price')
    const cardPriceString = cardPrice.innerText
    const cardPriceNumber = parseFloat(cardPriceString)



    // get the total price 
    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const totalNo = cardPriceNumber + priceTotalNumber

    priceTotal.innerText = totalNo

    // get discount




    // promo code use
    const promoCodeU = document.getElementById('promo-code')
    const promoCode = promoCodeU.value


    const button = document.getElementById('apply-but')
    if (promoCode === 'SELL200' && totalNo >= 200) {
        button.removeAttribute('disabled')
        
    }
    else {
        button.setAttribute('disabled', true);
    }

    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total



    if (finalTotal.innerText > 0) {
        const purchaseBut = document.getElementById('purchase-but')
        purchaseBut.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }


})





// when fivth card clicked




document.getElementById('fivth-card').addEventListener('click', function () {
    const listContainer = document.getElementById('list-of-item')
    const li = document.createElement('li')
    li.innerText = "Full Jersey Set"
    li.classList.add('item')
    listContainer.appendChild(li)

    // get the card price value 
    const cardPrice = document.getElementById('fivth-card-price')
    const cardPriceString = cardPrice.innerText
    const cardPriceNumber = parseFloat(cardPriceString)



    // get the total price 
    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const totalNo = cardPriceNumber + priceTotalNumber

    priceTotal.innerText = totalNo

    // get discount




    // promo code use
    const promoCodeU = document.getElementById('promo-code')
    const promoCode = promoCodeU.value


    const button = document.getElementById('apply-but')
    if (promoCode === 'SELL200' && totalNo >= 200) {
        button.removeAttribute('disabled')
        
    }
    else {
        button.setAttribute('disabled', true);
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total



    if (finalTotal.innerText > 0) {
        const purchaseBut = document.getElementById('purchase-but')
        purchaseBut.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }

})




// when sixth card clicked



document.getElementById('sixth-card').addEventListener('click', function () {
    const listContainer = document.getElementById('list-of-item')
    const li = document.createElement('li')
    li.innerText = "Full Jersey Set"
    li.classList.add('item')
    listContainer.appendChild(li)

    // get the card price value 
    const cardPrice = document.getElementById('sixth-card-price')
    const cardPriceString = cardPrice.innerText
    const cardPriceNumber = parseFloat(cardPriceString)



    // get the total price 
    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const totalNo = cardPriceNumber + priceTotalNumber

    priceTotal.innerText = totalNo

    // get discount




    // promo code use


    const promoCodeU = document.getElementById('promo-code')
    const promoCode = promoCodeU.value


    const button = document.getElementById('apply-but')
    if (promoCode === 'SELL200' && totalNo >= 200) {
        button.removeAttribute('disabled')
        
    }
    else {
        button.setAttribute('disabled', true);
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total

    if (finalTotal.innerText > 0) {
        const purchaseBut = document.getElementById('purchase-but')
        purchaseBut.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }


})



/* document.getElementById('promo-code').addEventListener('keyup', function (event) {
    console.log(event.value)
}) */


document.getElementById('go-home').addEventListener('click', function () {
    location.reload(true)
})


document.getElementById('promo-code').addEventListener('keyup', function (event) {
    const text = event.target.value

    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)
    const button = document.getElementById('apply-but')
    if (text === 'SELL200' && priceTotalNumber >= 200) {
        button.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', true);
    }
})


document.getElementById('apply-but').addEventListener('click', function () {


    const priceTotal = document.getElementById('total-price')
    const priceTotalString = priceTotal.innerText
    const priceTotalNumber = parseFloat(priceTotalString)

    const discountTotal = document.getElementById('discount')

    const finalTotal = document.getElementById('total-final')

    if (priceTotalNumber >= 200) {
        
        const yourDiscount = Math.round(priceTotalNumber * 0.2)

        discountTotal.innerText = yourDiscount


        const total = priceTotalNumber - yourDiscount


        finalTotal.innerText = total

        /* const inputPromo = document.getElementById('promo-code')
        inputPromo.value = ''; */
    }
    else {
        alert("Purchase 200tk or above and get 20% discount!!!")
    }
})