const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function ValidateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password1 = !isEmpty(data.password1) ? data.password1 : "";

    // Validate email
    if (Validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }else if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }

    // Validate passwords
    if (Validator.isEmpty(data.password1)) {
        errors.password1 = "Password is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
