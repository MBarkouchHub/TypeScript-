


let member : {
 readonly userName : string,
 passWd : string,
 skills : {
    one : string,
    two? : string
 }
} = {
    userName : 'Mourad',
    passWd : '123',
    skills : {
        one : 'JAVA'
    }
};

// member.userName = 'MA';  readOnly

console.log(member.userName);
console.log(member.skills.one);