const mongoose = require('mongoose');

const worldSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    size: {
        type: Number,
        required: true
    },
    passphrase: {
        type: String,
        required: false
    },
    items: {
        type: Array,
        required: true
    }
});

const World = mongoose.model('World', worldSchema);

module.exports = World;
