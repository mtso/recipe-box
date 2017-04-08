
var seed = require('./seed')
var storage;

function initialize(storageType) {
  storage = storageType;
  if (storage.getItem('counter') === null) {
    seedStorage();
  }
}

function seedStorage() {
  seed.forEach(function(recipe) {
    newItem(recipe)
  })
}

function getRecipes() {
  var recipes = [];
  for (var i = 0; i < storage.length; i++) {
    var key = storage.key(i);
    if (key.includes('recipe')) {
      var recipe = storage.getItem(key);
      recipes.push(JSON.parse(recipe));
    }
  }
  recipes = recipes.sort(function(a, b) {
    return a._id - b._id;
  })
  return recipes;
}

function deleteRecipe(recipe) {
  storage.removeItem('recipe' + recipe._id)
  console.log(storage)
}

function saveRecipe(recipe) {
  if (recipe._id) {
    storage.setItem('recipe' + recipe._id, JSON.stringify(recipe));
  } else {
    newItem(recipe)
  }
}

function newItem(recipe) {
  var counter = storage.getItem('counter') || 0;
  counter = +counter + 1;
  recipe._id = counter;
  var key = 'recipe' + counter;
  storage.setItem(key, JSON.stringify(recipe));
  storage.setItem('counter', counter);
}

module.exports = {
  initialize,
  getRecipes,
  saveRecipe,
  deleteRecipe,
}
