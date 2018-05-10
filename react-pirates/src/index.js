import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import PirateDetail from './components/PirateDetail';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Header headerTitle="Pirate List" />  
          <Route exact path="/" component={App} />
          <Route path="/pirate/:pid" 
          component={PirateDetail} 
          // render={() => {
          //   return <PirateDetail name="Jack" vessel="Shark" weapon="sword" />
          //   }}
          />
      </div>
      </Router>
    )
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
