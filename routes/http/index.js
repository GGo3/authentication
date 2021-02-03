const express = require('express');
const router = express.Router();
const users = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
const Ajv = require('ajv'); // подключение AJV
const validationSchema = require('./schemas/index'); // подключение схемы AJV
const ajv = new Ajv.default({allErrors: true}); // включаем обработку больше одной ошибки
require("ajv-errors")(ajv, {allErrors: true}); // подключаем кастомизацию ошибок в AJV


// ф-я валидации c помощью Ajv по схеме
const validator = (req, res, next) => {
  let data = req.body;
  const valid = ajv.validate(validationSchema, data); // получаем результат валидации в виде (true, false)
  if (!valid) { 
    res.send(ajv.errors.map((el) => {
      return {
        status: 'Error', // статус нужен для оброботки на фронте, чтобы трекать что именно туда прилитает
        inputName: el.dataPath.replace(/[^a-zA-Z ]/g, "."), // необходимое имя для смены класса инпута
        errorText: el.message, // текст кастомизированной ошибки
      }
    })); // обрабатываем массив ошибок, получаем объект для оброботки на фронте
    return;
  }
  next(); // если валидация true проходим дальше в middleware
};

router.get('/', users.getStartPage); // главная страница с двумя кнопками

router.get('/signin', users.getSignInPage); //  страница входа

router.post('/signin', upload.none(), validator, users.trySignIn); // обрабтка входа с отправкой статуса

router.get('/signup', users.getSignUpPage); //  страница регистрации

router.post('/signup', upload.none(), validator, users.trySignUp); // обрабтка регистрации с отправкой статуса


module.exports = router;
