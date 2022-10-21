
/**
 * @param {*} byteArray file in bytes.
 * @param {*} fileType image/jpeg
 * @param {*} fileNameAndType test.jpg
 */
function convertFileBytesToUrl(byteArray, fileType = "image/jpeg", fileName) {
    //const blob = new Blob([fileBytes], { type: fileType });
    const uint8Array = new Uint8Array(byteArray.length);
    for (let index = 0; index < byteArray.length; index++) {
        uint8Array[index] = byteArray.charCodeAt(index);
    }
    const blob = new Blob([uint8Array.buffer], { type: fileType })
    //const blob = new Blob([byteArray], { type: fileType });
    // tempUrl = 'blob:http://localhost:3000/44ab4495-1c26-4204-914a-d1c289034650
    const tempUrl = window.URL.createObjectURL(blob);
    return tempUrl
    /*const tempUrl = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, byteArray));
    return tempUrl*/
}

export default convertFileBytesToUrl;