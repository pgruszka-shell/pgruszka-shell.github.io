function generatePublicKey(modulusB64, exponentB64) {
    const rsaKey = new RSAKey();
    const modulus = b64tohex(modulusB64);
    const exponent = b64tohex(exponentB64);
    rsaKey.setPublic(modulus, exponent);
    return rsaKey;
  }

  function encrypt(elementId) {
    const plaintext = document.getElementById(elementId).value;
    const rsaKey = generatePublicKey(
      "4ieVH3h6KCdi8SmqkkAqnpkRRmtUcE3m0iQKVx9WrBa05HxORANxfi+Y+K3YCS36az3mJS4pHVli66nCdqzmjXCLNNQZRimgY826NvhI/VxkWCV32oXYstDh/XmF75CzHOFvXbnkmDqNs1BIiZurf9aYTgVjMfkHjU96YODgipT2uwlUvb/0b3XGWJT0MW5pZ/60JBjesuS9LAFApUkn//Y2zA62U3xOyBejgeassjvs7THY4m5YnD+/0zXsQOQKG1gxwA84wjxFdBMoogf3NFkPBUUDUYPeKB2bTCsxWGoMB3cspVvdKcPDmPYejOQbjbfi4OiV76VfPELy/0d5fQ==",
      "AQAB"
    );
    const encryptedData = rsaKey.encrypt(plaintext);
    const encryptedDataB64 = hex2b64(encryptedData);
    document.getElementById("encryptedDataText").value = encryptedDataB64;
  }

  function copyText(){
    var copyText = document.getElementById("encryptedDataText");
     copyText.select();
     document.execCommand("copy");
     alert("Copied the text: " + copyText.value);
   }

