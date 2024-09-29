class User{
    static userNumber : number = 0;
    constructor(private readonly _id : number, protected user_name : string, private salary : number){
        User.userNumber++;
    }


}

class Person{
    private static userNumber : number = 0;
    id : number = 0;
    username : string = "";

    static getUserNumber() : number {
        return this.userNumber;
    }


}


// abstract class


 abstract class  Food{
    constructor(title : string){
    }

    abstract getCookingTime() : void ;
}

class Pizza extends Food {
    constructor(title : string){
        super(title);
    }

    getCookingTime() : void {

    }
}

