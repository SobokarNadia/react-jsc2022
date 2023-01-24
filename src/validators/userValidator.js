import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().required().max(20),
    email: Joi.string().required().max(20),
    username: Joi.string().required().max(20),
})

export {userValidator}