"use strict";
class User {
    constructor(_id, user_name, salary) {
        this._id = _id;
        this.user_name = user_name;
        this.salary = salary;
        User.userNumber++;
    }
}
User.userNumber = 0;
class Person {
    constructor() {
        this.id = 0;
        this.username = "";
    }
    static getUserNumber() {
        return this.userNumber;
    }
}
Person.userNumber = 0;
class Food {
    constructor(title) {
    }
}
class Pizza extends Food {
    constructor(title) {
        super(title);
    }
    getCookingTime() {
    }
}
