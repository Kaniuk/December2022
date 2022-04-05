import React from 'react';

import './App.css';
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";

const App = () => {
    return (
        <div className="row">
            <Users/>
            <Comments/>
            <Posts/>
        </div>
    );
};

export default App;