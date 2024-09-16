import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Default from './components/Default.jsx'
import Layout from './components/Presentation/Layout.jsx';
import PostsRoutes from './routes/route.js';
import Home from './components/Presentation/SideLinks/Home.jsx';
import Team from './components/Presentation/SideLinks/Team.jsx';
import Projects from './components/Presentation/SideLinks/Projects.jsx';
import Calendar from './components/Presentation/SideLinks/Calendar.jsx';
import Reports from './components/Presentation/SideLinks/Reports.jsx';
import Documents from './components/Presentation/SideLinks/Documents.jsx';
import Settings from './components/Presentation/SideLinks/Settings.jsx';
import TeamData from './components/Presentation/TeamData.jsx';
import AuthForm from './components/Authorization/AuthForm.jsx';
import SignIn from './components/Authorization/SignIn.jsx';
import Auth from './components/Authorization/Auth.jsx';
import Forgot from './components/Authorization/Forgot.jsx';
import Game from './components/Game/Game.jsx';
import Hex from './components/Game/GuesstheHex/Hex.jsx';



function App() {

  return (
    <Routes>
      <Route path={""} element={<Default/>} />

      <Route path={PostsRoutes.games()} element={<Game />}>
          <Route path={PostsRoutes.game.guessthehex()} element={<Hex />}/>
      </Route>
      <Route path={PostsRoutes.layout()} element={<Layout/>}>
          <Route path={PostsRoutes.sidelinks.home()} element={<Home  />} />
          <Route path={PostsRoutes.sidelinks.team()} element={<Team />} />
          <Route path={PostsRoutes.sidelinks.projects()} element={<Projects />} />
          <Route path={PostsRoutes.sidelinks.calendar()} element={<Calendar />} />
          <Route path={PostsRoutes.sidelinks.documents()} element={<Documents />} />
          <Route path={PostsRoutes.sidelinks.reports()} element={<Reports />} />
          <Route path={PostsRoutes.sidelinks.settings()} element={<Settings />} />
          <Route path="teams" element={<TeamData />}>
            <Route path=":name" element={<TeamData />} />
          </Route>
      </Route>
      <Route path={PostsRoutes.form.auth()} element={<Auth />}>
        <Route path=":signin" element={<SignIn />}/>
      </Route>
      <Route path="/forgot" element={<Forgot />} />

      

    </Routes>
    
  )
}

export default App
