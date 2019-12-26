import { h } from "preact";

import Home from "../routes/home";

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: preact.FunctionalComponent = () => {
    return (
        <div id="app">
            <Home />
        </div>
    );
};

export default App;
