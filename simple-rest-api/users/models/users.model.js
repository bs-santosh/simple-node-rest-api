'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   permissionLevel: Number
});