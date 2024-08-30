const Router = require('express').Router();
const WalletAmt = require('../controller/walletControls');
const Meals = require('../controller/mealControls');
const Categories = require('../controller/categoryControls');

Router.get('/wallet', WalletAmt.walletAmount)
      .get('/meals', Meals.meals)
      .get('/categories', Categories.categories)

module.exports = Router;
