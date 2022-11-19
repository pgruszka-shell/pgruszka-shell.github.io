 function submit(){
    $("#card-container").empty();
    onload();
 }

 function onSelectEnv(){
    document.getElementById("OriginId").value = document.getElementById("environmentId").value;
    console.log('calling select env' + document.getElementById("environmentId").value);
    submit();
 }

 function Onload(){

    var local = document.getElementById("countryId").value;
    var key = document.getElementById("OriginId").value;
    var paymentMethodsResponse = "{\r\n    \"groups\": [\r\n        {\r\n            \"name\": \"Credit Card\",\r\n            \"types\": [\r\n                \"mc\",\r\n                \"visa\",\r\n                \"amex\",\r\n                \"maestro\",\r\n                \"diners\",\r\n                \"discover\"\r\n            ]\r\n        }\r\n    ],\r\n    \"paymentMethods\": [\r\n        {\r\n            \"details\": [\r\n                {\r\n                    \"items\": [\r\n                        {\r\n                            \"id\": \"1121\",\r\n                            \"name\": \"Test Issuer\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1154\",\r\n                            \"name\": \"Test Issuer 5\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1153\",\r\n                            \"name\": \"Test Issuer 4\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1152\",\r\n                            \"name\": \"Test Issuer 3\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1151\",\r\n                            \"name\": \"Test Issuer 2\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1162\",\r\n                            \"name\": \"Test Issuer Cancelled\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1161\",\r\n                            \"name\": \"Test Issuer Pending\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1160\",\r\n                            \"name\": \"Test Issuer Refused\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1159\",\r\n                            \"name\": \"Test Issuer 10\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1158\",\r\n                            \"name\": \"Test Issuer 9\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1157\",\r\n                            \"name\": \"Test Issuer 8\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1156\",\r\n                            \"name\": \"Test Issuer 7\"\r\n                        },\r\n                        {\r\n                            \"id\": \"1155\",\r\n                            \"name\": \"Test Issuer 6\"\r\n                        }\r\n                    ],\r\n                    \"key\": \"issuer\",\r\n                    \"type\": \"select\"\r\n                }\r\n            ],\r\n            \"name\": \"iDEAL\",\r\n            \"supportsRecurring\": true,\r\n            \"type\": \"ideal\"\r\n        },\r\n        {\r\n            \"details\": [\r\n                {\r\n                    \"key\": \"number\",\r\n                    \"type\": \"text\"\r\n                },\r\n                {\r\n                    \"key\": \"expiryMonth\",\r\n                    \"type\": \"text\"\r\n                },\r\n                {\r\n                    \"key\": \"expiryYear\",\r\n                    \"type\": \"text\"\r\n                },\r\n                {\r\n                    \"key\": \"cvc\",\r\n                    \"type\": \"text\"\r\n                },\r\n                {\r\n                    \"key\": \"holderName\",\r\n                    \"optional\": true,\r\n                    \"type\": \"text\"\r\n                }\r\n            ],\r\n            \"name\": \"Credit Card\",\r\n            \"type\": \"scheme\"\r\n        },\r\n        {\r\n            \"details\": [\r\n                {\r\n                    \"key\": \"sepa.ownerName\",\r\n                    \"type\": \"text\"\r\n                },\r\n                {\r\n                    \"key\": \"sepa.ibanNumber\",\r\n                    \"type\": \"text\"\r\n                }\r\n            ],\r\n            \"name\": \"SEPA Direct Debit\",\r\n            \"supportsRecurring\": true,\r\n            \"type\": \"sepadirectdebit\"\r\n        }\r\n    ]\r\n}";

    //
    // Card component configuration
    //
    // PLEASE CHANGE THE ORIGIN KEY TO SHELLS
    //
    const configuration = {
        locale: local,
        environment: "test",
        originKey: key,
        //$("input[name='options']:checked").val();
        //Local
       // originKey: "pub.v2.8215499009831073.aHR0cDovLzEyNy4wLjAuMTo4ODg3.bAGR_bR4pIFWdgbWnbOn1RXrU4HRq2z33tJ0zXlqlJc",
        //local cb uk
        //originKey: "pub.v2.8216245560812450.aHR0cDovLzEyNy4wLjAuMTo4ODg3.YYurxYk31LSdA5uCryqyT53Wwp-XULOu4XrQKBTO5j8",
        //local cb nl
        //originKey: "pub.v2.8216246092473167.aHR0cDovLzEyNy4wLjAuMTo4ODg3.r_xqinj90Rys0zfcgMn3aBBdDguEugGuwh7A8T5CLL4",
        //local cb company
        //originKey:"pub.v2.8016171198901535.aHR0cDovLzEyNy4wLjAuMTo4ODg3.sF34YVAHsXkZe08ubkfQLqSsUY3b0GjgZrgyyK3epAM",
        //CONS
        //originKey: "pub.v2.8215499009831073.aHR0cDovLzEyNy4wLjAuMTo4ODg3.bAGR_bR4pIFWdgbWnbOn1RXrU4HRq2z33tJ0zXlqlJc",
        //CONS new merchant
       // originKey: "pub.v2.8016171198901535.aHR0cDovLzEyNy4wLjAuMTo4ODg3.sF34YVAHsXkZe08ubkfQLqSsUY3b0GjgZrgyyK3epAM",
        paymentMethodsResponse: paymentMethodsResponse,
        onChange: handleOnChange,
        onAdditionalDetails: handleOnAdditionalDetails
    };


    const checkout = new AdyenCheckout(configuration);

    const card = checkout.create("card").mount("#card-container");

    function handleOnChange(state, component) {
        state.isValid // True or false. Specifies if all the information that the shopper provided is valid.
        state.data // Provides the data that you need to pass in the `/payments` call.
        component // Provides the active component instance that called this event.

        const payButton = document.querySelector('.pay-button');
        payButton.addEventListener('click', e => {
            if (state.isValid) {
            $("#card-results-container").empty();
            //Print pretty json to the screen
            $("#card-results-container").append(
                $('<pre>').text(
                    JSON.stringify(state.data, null, '  ')
                )
            );
            }
            console.log(state.data);
        });

    }

    function handleOnAdditionalDetails(state, component) {
        state.data // Provides the data that you need to pass in the `/payments/details` call.
        component // Provides the active component instance that called this event.
    }



    //
    //Handle finger print submission
    //
    $( "#finger-print-button" ).click(function() {
        var fingerprintTokenEntry = $('#finger-print-text-area').val();

        if (fingerprintTokenEntry == ''){
            alert('Fingerprint text area can not be left blank');
        }else{
            const threeDS2IdentifyShopper = checkout.create('threeDS2DeviceFingerprint', {
                fingerprintToken: fingerprintTokenEntry,
                onComplete: function(data) {
                    console.log("Success identify shopper");
                    console.log(data);
                    $("#fingerprint-results-container").empty();
                    $('#fingerprint-results-container').append(
                        $('<pre>').text(
                            JSON.stringify(data['data']['details']['threeds2.fingerprint'], null, '  ')
                        )
                    );
                }, // Gets triggered whenever the ThreeDS2 Component has a result
                onError: function(data) {
                    console.log("Error identify shopper");
                    console.log(data);
                } // Gets triggered on error
            })
                .mount('#threeDS2');
        }
    });



    //
    //Handle challenge token submission
    //
    $( "#challenge-button" ).click(function() {
        var challengeTokenEntry = $('#challenge-token-text-area').val();

        if (challengeTokenEntry == ''){
            alert('challengeTokenEntry text area can not be left blank');
        }else{
            const threeDS2Challenge = checkout.create('threeDS2Challenge', {
                challengeToken: challengeTokenEntry, //challenge token

                onComplete: function(challengeData) {
                    console.log("Successful challenge");
                    console.log(challengeData);
                    $("#challenge-container").empty();
                    $('#challenge-container').append(
                        $('<pre>').text(
                            JSON.stringify(challengeData['data']['details']['threeds2.challengeResult'], null, '  ')
                        )
                    );}, // Gets triggered whenever the ThreeDS2 Component has a result
                onError: function(challengeData) {
                    console.log("Error challenging shopper");
                    console.log(challengeData);
                }, // Gets triggered on error
                size: '01' // Defaults to '01'
            })
                .mount('#threeDS2Challenge');
        }
    });
}