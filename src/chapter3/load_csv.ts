type User = {
    name:string,
    age:number,
    premiumUser:boolean,
}

const data:　string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];

const userList = data.split('\n')
for (const user of userList) {
    if (user === "") {
        continue;
    }
    const [name, age, premiumUser] = user.split(',');
    users.push(
        {
            name: name,
            age:Number(age),
            premiumUser:Boolean(Number(premiumUser))
        }
    )
}



for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}はプレミアムユーザーです`)
    } else {
        console.log(`${user.name}はプレミアムユーザーではありません`)
    }
}