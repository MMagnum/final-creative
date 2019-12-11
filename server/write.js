const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

//
// Writing post entry
//

const entrySchema = new mongoose.Schema({
  title: String,
  entry: String,
});

const Entry = mongoose.model('Entry', entrySchema);

router.get('/', async (req, res) => {
  try {
    let entries = await Entry.find();
    return res.send(entries);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const entry = new Entry({
    title: req.body.title,
    entry: req.body.entry
  });
  try {
    await entry.save();
    return res.send(entry);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Entry.deleteOne({
      _id: req.params.id
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;