

interface User1{
    id : number,
    userName : string,
    country : string,
    toString() : string
}

let user : User1 = {
    id : 101,
    userName : 'M.BARKOUCH',
    country : 'MAR',
    toString() : string {
        return `
        Id : ${this.id}
        User name : ${this.userName}
        Country : ${this.country}
        `
    }

}

console.log(user.toString())

console.log('·'.repeat(100));
console.log('\n')

// re-open the interface 

interface Theme{
    readonly dark?: boolean,
    font: string,
}

interface Theme{
    fontSize: number,
}

let theme : Theme = {
    dark : true,
    font : 'Poppins',
    fontSize: 16
}


console.log('·'.repeat(100));
console.log('\n')

// interface extends

interface Member extends User1, Theme{
    email : string
}


let member_ : Member = {
    id : 102,
    font : 'Poppins',
    fontSize: 16,
    userName : 'M.BARKOUCH',
    country : 'MAR',
    email : 'mouradbarkouch@gmail.com',
    toString() : string {
        return `
        Id : ${this.id}
        User name : ${this.userName}
        Country : ${this.country}
        E-mail : ${this.email}
        `
    }
}

console.log(member_.toString())
