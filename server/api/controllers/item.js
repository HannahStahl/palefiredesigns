'use strict';

// Include our "db"
var db = require('../../config/db')();
module.exports = {getAll, get, add, update, remove};

// Set up Etsy API calls
var etsyjs = require('etsy-js');
var client = etsyjs.client({'key':'zcn6t5b9zttt9px3uiis8k0n'});

//GET /item operationId
function getAll(req, res, next) {
    client.get('/shops/5579006/listings/active', {}, function (err, status, body, headers) {   
        res.json({ items: body.results });
    });
}
//POST /item operationId
function add(req, res, next) {
    res.json({success: db.save(req.body), description: "item added!"});
}
//GET /item/{id} operationId
function get(req, res, next) {
    var id = req.swagger.params.id.value;
    var item = db.find(id);
    if(item) {
        res.json(item);
    }else {
        res.status(204).send();
    }        
}
//PUT /item/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value;
    var item = req.body;
    if(db.update(id, item)){
        res.json({success: 1, description: "item updated!"});
    }else{
        res.status(204).send();
    }
}
//DELETE /item/{id} operationId
function remove(req, res, next) {
    var id = req.swagger.params.id.value;
    if(db.remove(id)){
        res.json({success: 1, description: "item deleted!"});
    }else{
        res.status(204).send();
    }

}