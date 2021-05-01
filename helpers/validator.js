const { body, validationResult } = require('express-validator')
//check post data is valid or not
const postValidationRules = () => {
    try {
        return [
            // username must be an email
            body('payload').exists().withMessage('Payload is required'),
            body('referenceData').exists().withMessage('Reference data is required'),
          ]
    }catch (error) {
        next(error)
    }
}
const validate = (req, res, next) => {
    try { 
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

        return res.status(422).json({
            errors: extractedErrors,
        })
    }catch (error) {
        next(error)
    }
}
module.exports = {
  postValidationRules,
  validate,
}