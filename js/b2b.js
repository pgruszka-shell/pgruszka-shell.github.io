function generatePublicKey(modulusB64, exponentB64) {
    const rsaKey = new RSAKey();
    const modulus = b64tohex(modulusB64);
    const exponent = b64tohex(exponentB64);
    rsaKey.setPublic(modulus, exponent);
    return rsaKey;
  }

  function encrypt() {
    const card_number = document.getElementById("card_number_text").value;
    
    const rsaKey = generatePublicKey(
      "4ieVH3h6KCdi8SmqkkAqnpkRRmtUcE3m0iQKVx9WrBa05HxORANxfi+Y+K3YCS36az3mJS4pHVli66nCdqzmjXCLNNQZRimgY826NvhI/VxkWCV32oXYstDh/XmF75CzHOFvXbnkmDqNs1BIiZurf9aYTgVjMfkHjU96YODgipT2uwlUvb/0b3XGWJT0MW5pZ/60JBjesuS9LAFApUkn//Y2zA62U3xOyBejgeassjvs7THY4m5YnD+/0zXsQOQKG1gxwA84wjxFdBMoogf3NFkPBUUDUYPeKB2bTCsxWGoMB3cspVvdKcPDmPYejOQbjbfi4OiV76VfPELy/0d5fQ==",
      "AQAB"
    );
    const encrypted_card_number_data = rsaKey.encrypt(card_number);
    const encrypted_card_number_data_B64 =  hex2b64(encrypted_card_number_data);

    const card_expiry = document.getElementById("card_expiry_text").value;
    const encrypted_card_expiry_data = rsaKey.encrypt(card_expiry);
    const encrypted_card_expiry_data_B64 = hex2b64(encrypted_card_expiry_data) ;
    
    const encryptedDataB64 = {
            "encryptedCardNumber": encrypted_card_number_data_B64,
            "encryptedExpiryDate": encrypted_card_expiry_data_B64
    }
    document.getElementById("encryptedDataText").value = JSON.stringify(encryptedDataB64);
  }

  function copyText(){
    var copyText = document.getElementById("encryptedDataText");
     copyText.select();
     document.execCommand("copy");
     alert("Copied the text: " + copyText.value);
   }

