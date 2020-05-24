const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   GET all items    
// @access Public
router.get('/', (request, response) => {
    Item.find()
      .sort({ date:-1 }) // sorting the items in descending order of the date
      .then(items => response.json(items))  
});
 

// @route  POST api/items
// @desc   Add a item    
// @access Public
router.post('/', (request, response) => {
    const newItem = new Item({
                  name: request.body.name,
/*start*/        expiry_date: request.body.expiry_date //end
        });

        newItem.save().then(item => response.json(item));
});



// @route  DELETE api/items
// @desc   Remove an item    
// @access Public
router.delete('/:id', (request, response) => {
    Item.findById(request.params.id)
      .then(item => item.remove().then(() => response.json({success:true})))
      .catch(err => response.status(400).json({success:false}));
});


module.exports = router;