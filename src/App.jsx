import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Main =() =>{
  return <></>
};
const Profile =() =>{
  return <h2>Профиль</h2>
};
const Messages =() =>{
  return <h2>Страница сообщений</h2>
};
const Settings =() =>{
  return <h2>Страница настроек</h2>
};

function App() {
  return (
<div className='container'>
<div className="row">
<div className="col-3">
<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<NavLink className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="main">Главная</NavLink>
<NavLink className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="profile">Профиль</NavLink>
<NavLink className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="messages">Сообщения</NavLink>
<NavLink className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="settings">Настройки</NavLink>
</div>
</div>
<div className="col-9">
  <Routes>
  <Route path ="/main" element={<Main/>}/>
    <Route path ="/profile" element={<Profile/>}/>
    <Route path ="/messages" element={<Messages/>}/>
    <Route path ="/settings" element={<Settings/>}/>
  </Routes>
{/* <div className="tab-content" id="v-pills-tabContent">
<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
</div>
</div>
</div>
  );
}

export default App;
