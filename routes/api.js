var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

/* GET home page. */
router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  var controller = controllers[resource]
  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource'
    })

    return

  }

  controller
  .get(req.query)
  .then(function(results){
    res.send({
      confirmation: 'success',
      results: results 
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })

  res.send({
      confirmation: 'success',
      resource: resource
  })

});

/* GET resource by id */ 
router.get('/:resource/:id', function(req, res, next) {
        var resource = req.params.resource

        var controller = controllers[resource]
        if (controller == null) {
          res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
          })

          return

        }

        var id = req.params.id
        controller
        .getById(id)
        .then(function(results){
          res.send({
            confirmation: 'success',
            results: results 
          })
        })
        .catch(function(err){
          res.json({
            confirmation: 'fail',
            message: err.message
          })
        })

        res.send({
            confirmation: 'success',
            resource: resource
        })


});

module.exports = router; 
