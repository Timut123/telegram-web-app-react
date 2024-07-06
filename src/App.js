
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import MiniPlay from './MiniPlay'
import SystemUser from './SystemUser'

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header /> 
        <Switch>
          <Route path="/miniplay" component={MiniPlay} />
          <Route path="/systemuser" component={SystemUser} />
          <Route exact path="/">
            <h1>Главная страница</h1>
            <p>Основной контент</p>
          </Route>
        </Switch>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

