import React, { useEffect, useState } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { useParams } from 'react-router-dom';
import { db } from "../firebase-config";
import { useRef } from 'react';

// import { getMessageById } from "../messages";


function Messages() {
    let params = useParams();
    let msgRef = useRef(0);
    // let [message, setMessage] = useState(null);

    let [messages, setMessages] = useState([]);

    // let getMessageById = (id) => {
    //     return messages.find(message => message.time === id)
    // }
    let getMessages = async () => {
        const q = query(collection(db, "allmails"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setMessages(() => data);


        });
    };

    useEffect(() => {
        getMessages();

    }, []);

    if (messages.length === 0) {
        return <div>Loading...</div>
    }
    console.log(messages);
    console.log(typeof params.id);
    let param = params.id * 1;
    for (let i = 0; i < messages.length; i++) {
        console.log(typeof messages[i].time);
        if (messages[i].time === param) {
            msgRef.current = messages[i];

            console.log(messages[i]);
            // console.log(message);
            console.log(msgRef.current);
        }
    }

    return (
        <div className='msg-body'>
            <h2 className='msg-head'>{msgRef.current.text}</h2>
            <h4 className='msg-form'>{msgRef.current.from.email}</h4>
            <p className='msg-main'>{msgRef.current.text}</p>
        </div>
    )
}

export default Messages