const decor = require("./decor.js");
const nature = require("./nature.js");
const tools = require("./tools.js");
const animals = require("./animals.js");
const food = require("./food.js");
const npc = require("./npc.js");

const itemDetails = { ...nature, ...decor, ...tools, ...animals, ...food, ...npc }
module.exports = itemDetails