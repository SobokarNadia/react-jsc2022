import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().required().max(20),
    email: Joi.string().required().max(20),
    body: Joi.string().required().max(200),
})

export {commentValidator}