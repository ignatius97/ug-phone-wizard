const mobileRegex = /^(256|0|\+256)(7)(\d{8})$/gim;
const landlineRegex = /^(256|0|\+256)(20|31|39)(\d{7})$/gmi;

const validateNumber = (ugandanPhoneNumber, validateLandline = true) => {
    const phone = ugandanPhoneNumber.toString()

    const isValidMobile = mobileRegex.test(phone);
    const isValidLandline = landlineRegex.test(phone);

    return isValidMobile || (validateLandline && isValidLandline)
}

module.exports = validateNumber;