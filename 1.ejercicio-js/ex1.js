async function getUsers(number) {
    try {
        const { results } = await (
            await fetch(
                `https://randomuser.me/api/?results=${number}&inc=login,name,gender,nat,email,picture`
            )
        ).json();
        const users = [];
        results.forEach((element) => {
            const filteredUser = {
                username: element.login.username,
                name: `${element.name.first} ${element.name.last}`,
                gender: element.gender,
                country: element.nat,
                email: element.email,
                picture: element.picture.medium,
            };
            users.push(filteredUser);
        });
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

getUsers(5);
