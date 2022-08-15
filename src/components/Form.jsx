import React, { useState } from "react";
import { db } from '../firebase-config';

import { doc, collection, setDoc, addDoc } from "firebase/firestore";



import { useRef } from "react";

function Form() {
    let [formData, setFormData] = useState({});
    let to = {
        name: "Logan McAnsh",
        email: "logan@remic.xyx"
    }

    let sendMail = async () => {

        let message = {
            to: to,
            from: {
                name: formData.name,
                email: formData.email
            },
            text: formData.text,
            time: Date.now()
        }

        await addDoc(collection(db, "allmails"), message, { merge: true });

    }



    return (
        <div className="inp-form" >
            <label htmlFor="from-name" >Name</label>
            <input type="text" id="from-name" placeholder="From-Name" onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />
            <label htmlFor="From-email">Email</label>
            <input type="text" id="from-name" placeholder="From-Name" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
            <textarea value={formData.text} onChange={(e) => { setFormData({ ...formData, text: e.target.value }) }} />


            <button className="inp-button" onClick={() => sendMail()}>Send</button>
        </div >
    );
}

export default Form;
