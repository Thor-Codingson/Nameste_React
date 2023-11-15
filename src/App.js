import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// React.createElement is an Object, when we render it to DOM it becomes HTML Element

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<AppLayout />);