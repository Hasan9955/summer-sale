

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
    if (promoCode === 'SELL200' & totalNo >= 200) {
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
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total






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
    if (promoCode === 'SELL200' & totalNo >= 200) {
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
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total


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
    if (promoCode === 'SELL200' & totalNo >= 200) {
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
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total



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
    if (promoCode === 'SELL200' & totalNo >= 200) {
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
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total


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
    if (promoCode === 'SELL200' & totalNo >= 200) {
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
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total


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
    if ( totalNo >= 200 & promoCode === 'SELL200') {
        
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
    }


    const discountTotal = document.getElementById('discount')
    const discountTotalString = discountTotal.innerText
    const discountTotalNumber = parseFloat(discountTotalString)






    // total
    const finalTotal = document.getElementById('total-final')


    const total = totalNo - discountTotalNumber


    finalTotal.innerText = total


})



/* document.getElementById('purchase-but').addEventListener('click',function(){
    const finalTotal = document.getElementById('total-final')

    if (finalTotal>0){

    }
}) */