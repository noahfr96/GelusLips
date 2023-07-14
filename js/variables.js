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
    var quantProduct1 = document.getElementById('Quant-product-1');
    var selectedValue = quantProduct1.value;
    var isTenPlus = selectedValue === "10+";
  
    if (isTenPlus) {
      cSubtotalProduct1 = c.format(0);
      Subtotal = 0;
      Tax = 0;
      Total = 0;
    } else {
      QuantProduct1 = parseInt(selectedValue);
      Subtotal = QuantProduct1 * PriceProduct1;
      Tax = Subtotal * TaxRate;
      Total = Subtotal + Tax;
      cSubtotalProduct1 = c.format(Subtotal);
    }
  
    document.getElementById('Subtotal').innerHTML = c.format(Subtotal);
    document.getElementById('Tax').innerHTML = c.format(Tax);
    document.getElementById('Total').innerHTML = c.format(Total);
    document.getElementById('subtotal-Product-1').textContent = cSubtotalProduct1;
  }
function adjustInputWidth(input) {
    input.style.width = (input.value.length + 2.5) + 'ch';
}
function handleQuantityChange(selectElement) {
    var quantProduct1 = document.getElementById("Quant-product-1");

    if (selectElement.value === "10+") {
        var inputText = document.createElement("input");
        inputText.type = "text";
        inputText.id = "Quant-product-1";
        inputText.value = "Enter Quantity";
        inputText.style.color = "#888";
        inputText.style.width = "82px"; // Set the width of the text box here
        inputText.style.fontSize = "10px"; // Set the font size of the text here
        inputText.style.textAlign = "center"; // Center-align the text
        inputText.onfocus = function() {
            if (inputText.value === "Enter Quantity") {
                inputText.value = "";
                inputText.style.color = "#000";
                inputText.style.fontSize = "inherit";
            }
        };
        inputText.onblur = function() {
            if (inputText.value === "") {
                inputText.value = "";
                inputText.style.color = "#888";
                inputText.style.fontSize = "10px"; // Set the width of the text box here
            }
        };
        inputText.oninput = function() {
            QuantityPriceMultiplier();
            updateSubtotalTaxTotal();
        };
        inputText.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                inputText.blur();
            }
        });
        quantProduct1.parentNode.replaceChild(inputText, quantProduct1);
    } else {
        var inputNumber = document.createElement("select");
        inputNumber.id = "Quant-product-1";
        inputNumber.onchange = function() {
            QuantityPriceMultiplier();
            updateSubtotalTaxTotal();
            handleQuantityChange(this);
        };

        for (var i = 1; i <= 9; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            inputNumber.appendChild(option);
        }

        var option10plus = document.createElement("option");
        option10plus.value = "10+";
        option10plus.text = "10+";
        inputNumber.appendChild(option10plus);

        inputNumber.value = selectElement.value; // Set the selected value

        quantProduct1.parentNode.replaceChild(inputNumber, quantProduct1);
    }
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
