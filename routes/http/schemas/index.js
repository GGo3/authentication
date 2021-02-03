module.exports = {
  type: "object",
  allOf: [
    {
      properties: {
        loginMain: {type: "string", pattern: "^[a-zA-Z]+$"},
        passwordMain: {type: "string"},
        name: {type: "string", pattern: "^[a-zA-Z]+$"},
        surname: {type: "string", pattern: "^[a-zA-Z]+$"},
        login: {type: "string", pattern: "^[a-zA-Z]+$"},
        user_pass: {type: "string", pattern: "^[0-9]+$"},
      },
      additionalProperties: false,
    },
  ],
  errorMessage: {
    properties: {
      loginMain: "Неправильный логин или пароль",
      passwordMain: "",
      name: "Некорректно введено имя, попробуйте вводить только буквы на английском!",
      surname: "Некорректно введена фамилия, попробуйте вводить только буквы на английском!",
      login: "Некорректно введен логин, попробуйте вводить только буквы на английском!",
      user_pass: "Пароль должен состоять только из цифр",
    },
  },
}