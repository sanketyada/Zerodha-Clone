const mongoose = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// Create the model properly
const HoldingModel = mongoose.model("Holding", HoldingsSchema);

// Export the model directly
module.exports = HoldingModel;
