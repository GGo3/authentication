const Users = require('../models/users');

// Рендер стартовой страници
const getStartPage = (req, res) => {
  res.render('index');
}

// рендер страници со входом пользователя
const getSignInPage = (req, res) => {
  res.render('signin');
}

// рендер страници с регистрацией нового пользователя
const getSignUpPage = (req, res) => {
  res.render('signup');
}

// проверка наличия пользователя в БД
const trySignIn = async (req, res) => {
  const result = await Users.checkUser(req.body.loginMain, req.body.passwordMain); // в переменную отправляем результат проверки (true, false)
  if (result) {
    const currentUser = await Users.getUserByLogin(req.body.loginMain); // если такой пользаватель есть, запрашиваем его имя и фамилию с БД
    res.send(`Добро пожаловать, ${currentUser.surname} ${currentUser.name}`) // отправляем data в блок status
  } else {
    res.send([{status: false, errorText: 'Неправильный логин или пароль', inputName: '.loginMain'}]) // отправляем data в блок status
  }
}

// регистрация нового пользователя, получаем данные после валидатора
const trySignUp = async (req, res) => {
  const user = await new Users({
    name: req.body.name,
    surname: req.body.surname,
    login: req.body.login,
    userpass: req.body.userpass, // тут хешируем пароль
  });
  user.save(); // сохраняем нового пользавателя в БД
  res.send('Saved'); // отправляем data в блок status
}

module.exports = {
  getStartPage,
  getSignInPage,
  getSignUpPage,
  trySignIn,
  trySignUp,
}