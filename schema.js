const Joi = require("joi");
const schema ={
   
      register : Joi.object({
          name:Joi.string().required(),
          email:Joi.string().email().required(),
          password:Joi.string().min(6).max(12).required()
      }),
      login:Joi.object({
          email:Joi.string().email().required(),
          password:Joi.string().min(6).max(12).required()
      })
    
};
module.exports = schema;