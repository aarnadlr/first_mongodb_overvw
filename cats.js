// 1. INSTALL MONGOOSE
var mongoose = require("mongoose");

// 2. CONNECT TO THE DATABASE
// We will name the database: cat_app
// (MongoDB will LOOK for an exsiting cat_app,
//  otherise it will create a NEW one called cat_app)
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

// Removes the Terminal warning about the deprecation of mpromise
mongoose.Promise = global.Promise;

// 3. DEFINE A SCHEMA
// Tells Mongoose and our javascript that I want to be able to
//  add cats to our datatbase, and a cat should be defined as these
//  three key value pairs and types!!
//  Defines a PATTERN and STRUCTURE for our DATA
//  "The pure pattern"
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});



// 4. CREATE A MODEL
//Take the catSchema data pattern and COMPILE it into a MODEL called Cat
// We can now use Cat to make NEW cats, FIND cats, UPDATE cats
// --> ie Cat.find, Cat.remove, Cat.create
//      Cat now has all the mongoDB methods we want to use
var Cat = mongoose.model("Cat", catSchema)


// add a new cat to db

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat) {
//   if(err) {
//     console.log("SOMETHING WENT WRONG!");
//   } else {
//     console.log("WE JUST SAVED A CAT TO THE DB!");
//     // The -cat- below refers to what comes back from the database
//     console.log(cat);
//   }
// });

// 5. INTERACT WITH THE DATABASE
//SECOND WAY TO ADD or CREATE A NEW CAT.
// new Cat and george.save ALL AT ONCE:
Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function(err, cat) {
  if(err) {
    console.log("ERROR!");
    console.log(err);
  } else {
    console.log("CAT SAVED!");
    console.log(cat);
  }
});

// retrieve ALL cats from db
    // AND console.log each

Cat.find({}, function(err, cats) {
  if(err) {
    console.log("ON HO, ERROR!");
    console.log(err);
  } else {
    console.log("ALL THE CATS: ");
    console.log(cats);
  }
});


