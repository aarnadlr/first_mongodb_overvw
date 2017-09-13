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
// Tells Mongoose (and thus MongoDB) that I want to be able to
//  add cats to our database, and a cat should be defined as these
//  three key value pairs *and types*!!
//  Defines a PATTERN and STRUCTURE for our DATA
//  "The pure pattern" (can be revised flexibly later)
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});



// 4. CREATE A MODEL
//Takes the catSchema data pattern and COMPILE it into a MODEL we want to call Cat.
// We can now use Cat to make NEW cats, FIND cats, UPDATE cats
// --> ie Cat.find, Cat.remove, Cat.create
//      Cat now has all the mongoDB methods we want to use
//  This line determines the COLLECTION NAME: cats (pluralizes this!)
//  CREATES --> "db.cats" (DB IS PLURAL)
var Cat = mongoose.model("Cat", catSchema)


// ** FIRST WAY TO ADD or CREATE A NEW CAT.
//    (Longer; two parts)

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
// ** SECOND WAY TO ADD or CREATE A NEW CAT.
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


// using the FIND method:
// To retrieve/display ALL cats from db
    // AND console.log each

Cat.find({}, function(err, cats) {
  if(err) {
    console.log("OH NO, ERROR!");
    console.log(err);
  } else {
    console.log("ALL THE CATS: ");
    console.log(cats);
  }
});














