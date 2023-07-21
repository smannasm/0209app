const user = {
	id: "1",
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	avatar:
		"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
	about: "Тут я рассказываю о себе, своих увлечениях...",
};

// const users = {
// 	0: {
// 		id: 5,
// 		name: "Валерия",
// 		lastname: "Тимохина",
// 		email: "valerya@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
// 	},
// 	1: {
// 		id: 43,
// 		name: "Екатерина",
// 		lastname: "Свердлова",
// 		email: "sverdlova@ya.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
// 	},
// 	2: {
// 		id: 12,
// 		name: "Константин",
// 		lastname: "Свиридов",
// 		email: "konst@gmail.com",
// 		avatar:
// 			"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
// 	},
// 	3: {
// 		id: 4,
// 		name: "Юлия",
// 		lastname: "Петрова",
// 		email: "juli@mail.ru",
// 		avatar:
// 			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
// 	},
// 	4: {
// 		id: 9,
// 		name: "Петр",
// 		lastname: "Великий",
// 		email: "piotr@velikiy.com",
// 		avatar:
// 			"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
// 	},
// };
let users={};
export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
	return user;
}

// export function getUser(){
// return users;
// }

// export function getUsers() {
// 	return users;
// }
export async function getUsers(){
	let response = await fetch ("http://bumgardner.p-host.in/getUsers");
	users = await response.json();
	console.log(users);
	return users;
}