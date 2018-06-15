import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Content } from "./component/content";
ReactDOM.render(
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>,
    document.getElementById("app")
);
