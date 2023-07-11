////////////////////////////////////////////////////////////////////////
//variables
//Product Prices
var ProductPrice1

var TaxRate
var Tax
var Subtotal
var Total


//Output variables

var cProductPrice1

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

//-------------------------Input Variables----------------------------------

ProductPrice1 = 25

TaxRate = .07


//-------------------Data------------------------------------------------
//Equations
Subtotal = ProductPrice1
Tax = ProductPrice1*TaxRate
Total = Subtotal + Tax

//Final Outputs
cProductPrice1 = c.format(ProductPrice1)
cTax = c.format(Tax)
cSubtotal = c.format(Subtotal)
cTotal = c.format(Total)

// Sending values to HTML docs.
document.getElementById('Tax').innerHTML = cTax
document.getElementById('Subtotal').innerHTML = cSubtotal
document.getElementById('Total').innerHTML = cTotal
document.getElementById('Product-price-1').innerHTML = cProductPrice1