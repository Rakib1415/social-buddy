import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails.jsx'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/posts" component={Posts}/>
          <Route path="/posts/:id" component={PostDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
