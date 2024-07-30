const express = require('express');
const Route = express.Router();

const {userRegistration,userLogin} = require('../controllers/auth');
const {addItem,deleteItem,getAllItem,updateItem} = require('../controllers/Item');
const {addOrder,deleteOrder,getAllOrder,getUserOrderDetail} = require('../controllers/Order');


Route.post('/registration',userRegistration);
Route.post('/login',userLogin);

Route.post('/additem',addItem);
Route.delete('/deleteitem/:itemId',deleteItem);
Route.get('/getallitem',getAllItem);
Route.put('/updateitem',updateItem);

Route.post('/addorder',addOrder);
Route.delete('/deleteorder',deleteOrder);
Route.get('/getallorder',getAllOrder);
Route.post('/getuserorderdetail',getUserOrderDetail);



module.exports = Route 
