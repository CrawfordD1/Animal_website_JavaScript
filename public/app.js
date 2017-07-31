
var animalArray = [
{ name: "Pugosaurus",
  type: "Dog",
  food: "Pizza",
  image: 'http://www.tescobank.com/assets/website/img/pet-insurance/dogs/pug-exercise-446x320px.jpg'},
{ name: "Boba",
  type: "Cat",
  food: "Sock Fluff",
  image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{ name: "Barnaby",
  type: "Cat",
  food: "Tuna",
  image:"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
{ name: "Max",
  type: "Cat",
  food: "Whiskas Temptations",
  image:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
]

var addAnimal = function(animal){

  var ulanimal = document.createElement("ul");
  ulanimal.classList.add(animal.type);
  ulanimal.classList.add('animalList');

  var name = document.createElement("li");
  name.innerText = ("Name: " + animal.name);
  ulanimal.appendChild(name);

  var food = document.createElement("li");
  food.innerText = ("Favourite Food: " + animal.food);
  ulanimal.appendChild(food);

  var imageli = document.createElement("li");
  var image = document.createElement("img");
  image.setAttribute('src', animal.image);
  image.setAttribute("width", "500");
  image.classList.add('animalImg');
  imageli.appendChild(image);
  ulanimal.appendChild(imageli);

  var animalSection = document.querySelector("#animals")
  animalSection.appendChild(ulanimal);

}

var app = function() {
  animalArray.forEach(function(animal){
    addAnimal(animal);
  })
}

window.onload = app;











