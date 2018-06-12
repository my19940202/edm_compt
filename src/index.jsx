import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./component/edm/header";
import { Footer } from "./component/edm/footer";
import { Content } from "./component/edm/content";
ReactDOM.render(
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>,
    document.getElementById("app")
);

setTimeout(() => {
    console.log('fuck yop')
}, 2000)