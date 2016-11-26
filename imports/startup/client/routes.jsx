import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from '../../components/page/app.jsx'
import { Index } from '../../components/page/index.jsx'
import { Page1 } from '../../components/page/page1.jsx'
import { Page2 } from '../../components/page/page2.jsx'
import { Hello } from '../../components/page/hello.jsx'
import { NotFoundPage } from '../../components/page/not-found.jsx'


const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/one" component={Page1} />
            <Route path="/two" component={Page2} />
            <Route path="/hello/:name" component={ Hello } />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
)

Meteor.startup(function() {
    ReactDOM.render(<Routes />, document.getElementById('react-root'));
})

// reference: https://themeteorchef.com/snippets/react-router-basics/