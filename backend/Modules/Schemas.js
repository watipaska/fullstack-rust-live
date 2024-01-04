const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentAddSchema = new Schema({
    firstname: { type: String },
    surname: { type: String },
    gender: { type: String },
    current_status:{ type :  String },
    other_name:{ type: String },
    date_of_birth:{ type: String },
    current_class:{ type: String },
    registration_number:{ type: String },
    date_of_admission:{ type: String },
    parent_mobile_number:{ type: String },
    address:{ type: String },
    others:{ type: String },
    passport:{ type: String },
    
});

const StudentAdd = mongoose.model('StudentAdd', StudentAddSchema);

module.exports = StudentAdd;
