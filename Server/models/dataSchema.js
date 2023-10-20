const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  email: String, 
  code: String,
  condition: String,
  userColumn1: String,
  userColumn2: String,
  userColumn3: String,
  userColumn4: String,
  userColumn5: String,
  userColumn6: String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;