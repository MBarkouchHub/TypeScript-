


type Padding = {
    top : number,
    right : number,
    bottom : number,
    left : number
}

type DynamicPadding = Padding & {activated : boolean}

function getPadding(padding : Padding){
    console.log(`Top : ${padding.top}`)
    console.log(`right : ${padding.right}`)
    console.log(`bottom : ${padding.bottom}`)
    console.log(`left : ${padding.left}`)
}

getPadding({ right : 6,bottom : 12, left : 6, top : 12});

console.log('#'.repeat(20));

function getDynamicPadding(padding : DynamicPadding){
    console.log(`Top : ${padding.top}`)
    console.log(`right : ${padding.right}`)
    console.log(`bottom : ${padding.bottom}`)
    console.log(`left : ${padding.left}`)
    console.log(`activated : ${padding.activated}`)
}

getDynamicPadding({activated: true, right : 6,bottom : 12, left : 6, top : 12});


// literale types : 

type nums = -1 | 0 | 1;

function compare(n1 : number, n2 : number) : nums{
    if (n1 == n2)
        return 0
    else if (n1 > n2)
        return 1;
    else return -1;
}