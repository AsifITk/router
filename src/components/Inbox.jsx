import React, { useState } from "react";
// import { messages } from '../messages'
import { useNavigate } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect } from "react";

function Inbox() {
    let goTo = useNavigate();
    let [messages, setMessages] = useState([]);
    let getMessages = async () => {
        const q = query(collection(db, "allmails"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setMessages(data);
            console.log(data);
        });
    };

    useEffect(() => {
        getMessages();
    }, []);

    if (messages.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="messages">
            {messages.map((message) => {
                // let time = new Date(message.time)

                return (
                    <div
                        className="message"
                        onClick={() => goTo(`/inbox/${message.time}`)}
                    >
                        <span className="msg-name">{message.from.name}</span>
                        <span className="msg-body">{message.text}</span>
                        <span>
                            {JSON.stringify(new Date(message.time)).substring(0, 20)}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default Inbox;
