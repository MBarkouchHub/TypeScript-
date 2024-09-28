

enum Price {
    PACK1 = 99,
    PACK2 = 299
}

enum Plan {
    STUDENT = Price.PACK1,
    PRO = Price.PACK1,
    BUSINESS = Price.PACK2,
}


console.log(Plan.BUSINESS)