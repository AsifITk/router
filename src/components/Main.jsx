import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Inbox from "./Inbox";
import Login from "./Login";
import Messages from "./Message";

import NoMatch from "./NoMatch";
import Form from "./Form";

function Main() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    let goTo = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            goTo("/Login");
        } else {
            goTo("/Home");
        }
    }, [isLoggedIn]);

    return (
        <div className="Container">
            <Routes>
                <Route
                    path="/login"
                    element={<Login setIsLoggedIn={setIsLoggedIn} />}
                ></Route>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/about" element={<Home />}></Route>
                    <Route path="/inbox" element={<Inbox />}></Route>
                    <Route path="/form" element={<Form />}></Route>
                    <Route path="inbox/:id" element={<Messages />}></Route>
                    <Route path="*" element={<NoMatch />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default Main;
