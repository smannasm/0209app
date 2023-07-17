import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from './components/Main';
import { Profile } from './components/Profile';
import { Friends } from './components/Friends';
import { Settings } from './components/Settings';


function App(props) {

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-3">
					<div className="nav flex-column nav-pills" aria-orientation="vertical">
						<NavLink className="nav-link" to="/">
							Главная
						</NavLink>
						<NavLink className="nav-link" to="profile">
							Профиль
						</NavLink>
						<NavLink className="nav-link" to="friends"> 
							Друзья
						</NavLink>
						<NavLink className="nav-link" to="settings">
							Настройки
						</NavLink>
					</div>
				</div>
				<div className="col-9">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/profile*" element={<Profile function={props.function.key_getUser} />} />
						<Route path="/friends" element={<Friends function={props.function.key_getUsers} />} />;
						<Route path="/settings" element={<Settings />} />;
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;