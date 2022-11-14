import './App.css';
import NavBar from "./components/navbar";
import Profile from "./components/profile";
import Loading from "./components/loading";
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes, Link } from 'react-router-dom';
import VideosPage from "./components/navBarPrivate/videospage";
// import { Routes } from 'react-router-dom';


function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  console.log("user", user); 


  return (


    <div id="app" className="d-flex flex-column h-100">
      <header className="App-header">
        <NavBar />
        <div className="container flex-grow-1">
        {!user ? <span>Hello from Tera.</span> : <span>Hi <Link to="api/me">{user.name}</Link></span> }
        </div>
      </header>
      <div>
        <Routes>
        <Route path="api/me" element={<Profile user={user}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
