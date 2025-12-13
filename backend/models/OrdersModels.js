const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema.js");

const OrdersModels = new model("order",OrdersSchema);

module.exports = {OrdersModels}
