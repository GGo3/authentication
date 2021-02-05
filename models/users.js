const path = require('path');
const mongoose = require('mongoose');
const generalSchema = require('./schemas/users');
const crypto = require('crypto')

generalSchema.statics.getUserByLogin = async function(login) {
  const user = await this.findOne({ "login": login});
  return user;
}

generalSchema.statics.checkUser = async function(login, pass) {
  const user = await this.findOne({ login: login});
  const currentHash = crypto.createHmac('sha256', pass)
    .update('14&?f#')
    .digest('hex');
  if (!user) return false;
  return currentHash === user.password ? true : false;
};

generalSchema.virtual('userpass')
  .get(function() {console.log('no date')})
  .set(function(pass)  {
    const currentHash = crypto.createHmac('sha256', pass)
    .update('14&?f#')
    .digest('hex');
    this.set({ password: currentHash })
  });

const modelname = path.basename(__filename, '.js'); // Название модели совпадает с названием файла модели. Тут мы получаем имя файла без расширения .js
const model = mongoose.model(modelname, generalSchema); // собственно создаем модель
module.exports = model;