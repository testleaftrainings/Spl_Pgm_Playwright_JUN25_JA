//10 min zepto delivery

let zeptoDelivery = new Promise((resolve, reject) => {

  let isDelivered = true; // Change to false to test rejection

    if (isDelivered) {
      resolve("✅ Zepto delivered your groceries in 10 minutes!");
    } else {
      reject("❌ Zepto failed to deliver. Please try again.");
    }

});

zeptoDelivery
  .then((message) => {
    console.log(message); // When delivered successfully
  })
  .catch((error) => {
    console.log(error); // When delivery fails
  });
