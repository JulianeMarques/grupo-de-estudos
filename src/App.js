import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Login from './pages/Login'; 
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('')

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/TodoList" component={ TodoList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
