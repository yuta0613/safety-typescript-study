type User2 = {
    name:string,
    age:number,
    premiumUser:boolean,
}

const data2:　string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users2: User2[] = data2.split("\n")
    .filter(line => line !=="")
    .map(line => {
        const [name, ageString, premiumUserString] = line.split(",");

    return {
        name,
        age: Number(ageString),
        premiumUser: premiumUserString === "1"
    };

    });

for (const user of users2) {
    if (user.premiumUser) {
        console.log(`${user.name}はプレミアムユーザーです`)
    } else {
        console.log(`${user.name}はプレミアムユーザーではありません`)
    }
}