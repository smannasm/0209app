
import { NavLink } from "react-router-dom";
import React from "react";

const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				<NavLink to={"/profile/" + props.id}>
					{props.name} {props.lastname}
				</NavLink>
			</td>
			<td>{props.email}</td>
		</tr>
	);
};
export class Friends extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userRow: [] };
	}

// export const Friends = (props) => {
// 	let users = props.function();

// 	let usersCount = Object.keys(users).length;
// 	let userRow = [];

	// for (let i = 0; i < usersCount; i++) {
	// 	userRow.push(
	// 		<TableRow
	// 			id={users[i].id}
	// 			index={i}
	// 			key={i}
	// 			name={users[i].name}
	// 			lastname={users[i].lastname}
	// 			email={users[i].email}
	// 		/>
	// 	);
	// }
	componentDidMount() {
		this.props.function().then((users) => {
			console.log(users);
			let usersCount = users.length;
			let userRow = [];

			for (let i = 0; i < usersCount; i++) {
				userRow.push(
					<TableRow
						id={users[i].id}
						index={i}
						key={i}
						name={users[i].name}
						lastname={users[i].lastname}
						email={users[i].email}
					/>
				);
			}
			this.setState({userRow: userRow});
		});
	}
	render() {

	return (
		<>
			<h2 className="text-center">Список друзей:</h2>
			<div className="row">
				<div className="col-12 mx-auto">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Имя и фамилия</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>{this.state.userRow}</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
}