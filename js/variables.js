////////////////////////////////////////////////////////////////////////

//variables-------------------------------------------------
//Product Prices
var SubtotalProduct1
var QuantProduct1

var TaxRate
var Tax
var Subtotal
var Total


//Output variables

var cPriceProduct1
var PriceProduct1
var PricePhraseProduct1
var cSubtotalProduct1

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

PriceProduct1 = 18;

TaxRate = .095;


//-------------------Data------------------------------------------------//
//Equations
Subtotal = PriceProduct1
Tax = PriceProduct1*TaxRate
Total = Subtotal + Tax

//Functions
function QuantityPriceMultiplier(QuantProduct1) {
    QuantProduct1 = document.getElementById('Quant-product-1').value;
    SubtotalProduct1 = QuantProduct1 * PriceProduct1;
    document.getElementById('subtotal-Product-1').textContent = c.format(SubtotalProduct1);
}
function updateSubtotalTaxTotal() {
    QuantProduct1 = parseInt(document.getElementById('Quant-product-1').value);
    Subtotal = QuantProduct1 * PriceProduct1;
    Tax = Subtotal*TaxRate
    Total = Subtotal + Tax
    document.getElementById('Subtotal').textContent = c.format(Subtotal);
    document.getElementById('Tax').innerHTML = c.format(Tax);
    document.getElementById('Total').innerHTML = c.format(Total);
  }
function adjustInputWidth(input) {
    input.style.width = (input.value.length + 2.5) + 'ch';
  }

//Final Outputs
cPriceProduct1 = c.format(PriceProduct1);
cTax = c.format(Tax);
cSubtotal = c.format(Subtotal);
cTotal = c.format(Total);
PricePhraseProduct1 = "Price: " + cPriceProduct1;
cSubtotalProduct1 = cPriceProduct1

// Sending values to HTML docs.
document.getElementById('Subtotal').innerHTML = cSubtotal;
document.getElementById('Tax').innerHTML = cTax;
document.getElementById('Total').innerHTML = cTotal;
document.getElementById('Price-Phrase-Product-1').innerHTML = PricePhraseProduct1;
document.getElementById('subtotal-Product-1').textContent = cSubtotalProduct1;
