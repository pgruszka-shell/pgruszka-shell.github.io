function changeTokenKey(){
    var merchantId = document.getElementById("merchantId").value;
    document.getElementById("tokentId").value = merchantId;
    var buttonContainer = document.getElementById('paypal-button');
    buttonContainer.removeChild(buttonContainer.childNodes[0]);
  }

  function changetoken(){
    var tokenKey = document.getElementById("tokentId").value;

    // Create a client.
    braintree.client.create({
      authorization: tokenKey // REPLACE WITH SHELL TOKENIZATION KEY FROM SANDBOX
    }, function (clientErr, clientInstance) {
    
      // Stop if there was a problem creating the client.
      // This could happen if there is a network error or if the authorization
      // is invalid.
      if (clientErr) {
        console.error('Error creating client:', clientErr);
        return;
      }
    
      
            
      // Create a PayPal component.
      braintree.paypalCheckout.create({
      client: clientInstance
    }
    
    , function (createErr, paypalCheckoutInstance) {
      if (createErr) {
        if (createErr.code === 'PAYPAL_BROWSER_NOT_SUPPORTED') {
          console.error('This browser is not supported.');
        } else {
          console.error('Error!', createErr);
        }
        return;
      }
     
      
    
      paypal.Button.render({
        env: 'sandbox', // or 'sandbox'
    
        locale: 'en_US',
    
    payment: function () {
       return paypalCheckoutInstance.createPayment({
          flow: 'vault',
          amount: '10.00',
          currency: 'EUR',
          intent: 'sale'
        });
      },
    
        onAuthorize: function (data, actions) {
          var element = document.getElementById("payment_method_nonce");
         if (element != null){
          element.remove();
         } 
        console.log( JSON.stringify(data, 0, 2),JSON.stringify(actions, 0, 2));
          return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {
            // Submit payload.nonce to your server
        console.log('payment authorized by user',JSON.stringify(payload, 0, 2));
        console.log(payload.nonce);
          var container = document.getElementById("checkout");
      var input = document.createElement("input");
                    input.type = "text";
                    input.name = "payment_method_nonce";
                    input.id = "payment_method_nonce"
            input.value = payload.nonce;
                    container.appendChild(input);
          }).catch(function (err) {
            // handle error
          });
        },
    
        onCancel: function (data) {
          console.log('checkout.js payment cancelled', JSON.stringify(data, 0, 2));
        },
    
        onError: function (err) {
          console.error('checkout.js error', err);
        }
      }, '#paypal-button'); // the PayPal button will be rendered in an html element with the id `paypal-button`
    });
    
    });
    var buttonContainer = document.getElementById('paypal-button');
    buttonContainer.removeChild(buttonContainer.childNodes[0]);
}