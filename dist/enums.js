"use strict";
var Price;
(function (Price) {
    Price[Price["PACK1"] = 99] = "PACK1";
    Price[Price["PACK2"] = 299] = "PACK2";
})(Price || (Price = {}));
var Plan;
(function (Plan) {
    Plan[Plan["STUDENT"] = 99] = "STUDENT";
    Plan[Plan["PRO"] = 99] = "PRO";
    Plan[Plan["BUSINESS"] = 299] = "BUSINESS";
})(Plan || (Plan = {}));
console.log(Plan.BUSINESS);
