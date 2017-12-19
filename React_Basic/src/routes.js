'use strict';

const React = require('react');
const ReactRouter = require('react-router-dom');
const HashRouter = ReactRouter.HashRouter;
const Link = ReactRouter.Link;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const AuthorsIndex = require('./components/authorsIndex');
const JoyceBooks = require('./components/joyceBooks');
const WellsBooks = require('./components/wellsBooks');
const NotFound = require('./components/notFound');

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={AuthorsIndex}/>
          <Route path="/author/joyce" component={JoyceBooks}/>
          <Route path="/author/h-g-wells" component={WellsBooks}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </HashRouter>
    );
  }
}

module.exports = Routes;