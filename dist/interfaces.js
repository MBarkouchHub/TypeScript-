"use strict";
let user = {
    id: 101,
    userName: 'M.BARKOUCH',
    country: 'MAR',
    toString() {
        return `
        Id : ${this.id}
        User name : ${this.userName}
        Country : ${this.country}
        `;
    }
};
console.log(user.toString());
console.log('·'.repeat(100));
console.log('\n');
let theme = {
    dark: true,
    font: 'Poppins',
    fontSize: 16
};
console.log('·'.repeat(100));
console.log('\n');
let member_ = {
    id: 102,
    font: 'Poppins',
    fontSize: 16,
    userName: 'M.BARKOUCH',
    country: 'MAR',
    email: 'mouradbarkouch@gmail.com',
    toString() {
        return `
        Id : ${this.id}
        User name : ${this.userName}
        Country : ${this.country}
        E-mail : ${this.email}
        `;
    }
};
console.log(member_.toString());
