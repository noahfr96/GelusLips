////////////////////////////////////////////////////////////////////////
//variables
//Product Prices
var ProductPrice1
// var Product1QuantPrice

var TaxRate
var Tax
var Subtotal
var Total


//Output variables

var cProductPrice1
var Priceproduct1
// var cProduct1QuantPrice

var cTax
var cSubtotal
var cTotal


//Formats

const c = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
})



////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//-------------------------Input Variables----------------------------------//

ProductPrice1 = 18

TaxRate = .095


//-------------------Data------------------------------------------------//
//Equations
Subtotal = ProductPrice1
Tax = ProductPrice1*TaxRate
Total = Subtotal + Tax

//Functions
function QuantityPriceMultiplier(Product1Quatity) {
    var Product1QuantPrice = document.getElementById('Product-1-Quant-Price');
    Product1QuantPrice.value = Product1Quatity.value
}

//Final Outputs
cProductPrice1 = c.format(ProductPrice1)
cTax = c.format(Tax)
cSubtotal = c.format(Subtotal)
cTotal = c.format(Total)

// cProduct1QuantPrice = 

Priceproduct1 = "Price: " + cProductPrice1;

// Sending values to HTML docs.
document.getElementById('Tax').innerHTML = cTax
document.getElementById('Subtotal').innerHTML = cSubtotal
document.getElementById('Total').innerHTML = cTotal
document.getElementById('Product-price-1').innerHTML = cProductPrice1
document.getElementById('Price-product-1').innerHTML = Priceproduct1
// document.getElementById('Product-1-Quant-Price').innerHTML = cProduct1QuantPrice