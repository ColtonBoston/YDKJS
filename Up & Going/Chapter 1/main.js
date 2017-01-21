var PHONE_PRICE = 99.99,
    ACCESSORY_PRICE = 9.99,
    TAX_RATE = 0.08,
    SPENDING_THRESHOLD = 200,
    balance = parseInt(prompt('How much money do you have?')),
    currentCharge = 0,
    stillShopping = true,
    phonesBought = 0,
    accessoriesBought = 0;

function addTax(amount){
  amount = amount + (amount * TAX_RATE);
  return formatAmount(amount);
}

function formatAmount(amount){
  return '$' + amount.toFixed(2);
}

while (balance > 0 && stillShopping){
  currentCharge = 0;
  var buyPhone = confirm(
    'Your balance: ' + formatAmount(balance)
    + '.\nPurchase total: ' + formatAmount(currentCharge)
    + '\nPhones bought: ' + phonesBought
    + '\nAccessories bought: ' + accessoriesBought
    + '\nWould you like to buy a phone for $' + PHONE_PRICE + '?');

  if (buyPhone && balance >= PHONE_PRICE){
    currentCharge += PHONE_PRICE;

    var buyAccessory = confirm('Your balance: ' + formatAmount(balance)
    + '.\nPurchase total: ' + formatAmount(currentCharge)
    + '\nPhones bought: ' + phonesBought
    + '\nAccessories bought: ' + accessoriesBought
    + '\nWould you like to add an accessory for $' + ACCESSORY_PRICE + '?');

    phonesBought++;
    if (buyAccessory && balance >= ACCESSORY_PRICE){
      currentCharge += ACCESSORY_PRICE;
      accessoriesBought++;
    }

    balance -= currentCharge;
  } else {
    stillShopping = false;
  }
}

console.log(formatAmount(balance));
