import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function More() {
    let {path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>More</h2>
        <ul>
          <li>
            <Link to={`${url}/not yet an information`}>To learn other product</Link>
          </li>
          <li>
            <Link to={`${url}/not yet an information, check`}>FAQ</Link>
          </li>
          <li>
            <Link to={`${url}/not yet an information, check again`}>History</Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${path}/:MoreId`}>
            <Mores />
          </Route>
        </Switch>
      </div>
    )
  }

  function Mores() {
    let { MoreId } = useParams();
  
    return (
      <div>
        <h3>{MoreId}</h3>
      </div>
    );
  }

  export default More;