'use strict';

// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, get, add, update, remove};

//GET /item operationId
function getAll(req, res, next) {
    res.json({ items: db.find()});
}
//GET /item/{id} operationId
function get(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var item = db.find(id);
    if(item) {
        res.json(item);
    }else {
        res.status(204).send();
    }        
}
//POST /item operationId
function add(req, res, next) {
    res.json({success: db.save(req.body), description: "item added to the list!"});
}
//PUT /item/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var item = req.body;
    if(db.update(id, item)){
        res.json({success: 1, description: "item updated!"});
    }else{
        res.status(204).send();
    }

}
//DELETE /item/{id} operationId
function remove(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "item deleted!"});
    }else{
        res.status(204).send();
    }

}