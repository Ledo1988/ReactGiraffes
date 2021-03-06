import React, { Suspense, useState } from 'react';
import {Route} from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import "../../styles/main.scss";
import UploadExample from './UploadExample';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Management from "../Management/Management";
import Giraffes from "../Giraffes/Giraffes";
import Staff from "../Staff/Staff";
import Settings from "../Settings/Settings";
import Support from "../Support/Support";


const App = (props) => {

    return (
        <div className="app green-bg">
           <Header/>
            <main className="main">
                <div className="view ">
                    <Route path="/main" component={Main}/>
                    <Route path="/management" component={Management}/>
                    <Route exact path="/" component={Giraffes}/>
                    <Route path="/staff" component={Staff}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/suppport" component={Support}/>
                </div>

            </main>
        </div>
    )
}

export default hot(App)