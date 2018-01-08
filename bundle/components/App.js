import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
const App = () => (React.createElement(Router, null,
    React.createElement("div", null,
        React.createElement(Route, { exact: true, path: "/", component: Home }),
        React.createElement(Route, { path: "/search", component: Search }))));
export default App;
//# sourceMappingURL=App.js.map