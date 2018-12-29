var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//Referencing Mongoose
var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/mydb');

mongoose.connect('mongodb://localhost:27017/capstone', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

var router = express.Router();

router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/*+json' }));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));


// Defining the Schema Users
var UsersSchema = new mongoose.Schema({
    Empid: String,
    Name: String,
    Email: String,
    Phone: String,
    Description: String,
    Type: String
    });

// Exporting a Model (We need to call the model constructor on the mongoose instance and pass it the name of the collection)
// and a refence to the Schema definition )     
var Users = mongoose.model('Users', UsersSchema);

// Defining the Schema Users
var ReviewSchema = new mongoose.Schema({
  Id: String,
  Trainee: String,
  Reviewer: String,
  Status: String,
  Description: String,
  Lastupdate: { type: Date, default: Date.now },
  ResolvedDate: { type: Date, default: Date.now }
  });

var Reviews = mongoose.model('Reviews', ReviewSchema);

var CommentsSchema = new mongoose.Schema({
    Commentid: String,
    Description: String,
    Reviewid: String,
    From: String,
    Date: { type: Date, default: Date.now },
    Time: String
});
  
var Comments = mongoose.model('Comments', CommentsSchema);


var SubmissionsSchema = new mongoose.Schema({
  Empid: String,
  ILP: String,
  Link: String,
  Comment: String,
  Fileupload: String
},
{
  timestamps:true
});

var Submissions = mongoose.model('Submissions', SubmissionsSchema);


/* GET ALL Users */
router.get('/users', function(req, res, next) {
    Users.find(function (err, users) {
      if (err) return next(err);
      res.json(users);
    });
});

/* GET ALL Reviews */
router.get('/reviews', function(req, res, next) {
    Reviews.find(function (err, reviews) {
      if (err) return next(err);
      res.json(reviews);
    });
});

/* SUBMIT FOR REVIEW */
router.post('/submission', function(req, res, next) {
  Submissions.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL Comments */
router.get('/comments', function(req, res, next) {
    Review.find(function (err, comments) {
      if (err) return next(err);
      res.json(comments);
    });
});

/* GET ALL ISSUES */
router.get('/', function(req, res, next) {
  Issue.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE ISSUE BY ID */
router.get('/:id', function(req, res, next) {
  Issue.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE ISSUE */
router.post('/erer', function(req, res, next) {
  Issue.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ISSUE */
router.put('/:id', function(req, res, next) {
  Issue.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ISSUE */
router.delete('/:id', function(req, res, next) {
  Issue.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
