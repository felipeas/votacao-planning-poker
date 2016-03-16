var mongoose = require('mongoose');
var _ = require('lodash');
var Usuario = mongoose.model('Usuario');

/**
 * List
 */
exports.all = function(req, res) {
  Usuario.find({}).exec(function(err, votacoes) {
    if(!err) {
      res.json(votacoes);
    }else {
      console.log('Error in first query');
    }
  });
};

/**
 * Add a Usuario
 */
exports.add = function(req, res) {
  Usuario.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send('Added successfully');
  });
};

/**
 * Update a Usuario
 */
exports.update = function(req, res) {
  var query = { id: req.body.id };
  var isIncrement = req.body.isIncrement;
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _.omit(req.body, omitKeys);

  if(isFull) {
    Usuario.findOneAndUpdate(query, data, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  } else {
    Usuario.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1: -1 } }, function(err, data) {
      if(err) {
        console.log('Error on save!');
        // Not sure if server status is the correct status to return
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  }

};

/**
 *
 */
exports.increment = function(req, res) {
  var query = { id: req.body.id };
};

/**
 * Remove a votacao
 */
exports.remove = function(req, res) {
  var query = { id: req.body.id };
  Usuario.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};
