import React, {useState } from 'react';
import axios from "axios";


function Login(props) {

    const baseURL = "http://localhost:8080";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios
        .post(baseURL + "/login", {
          username: username,
          password: password
        })
        .then((response) => {
          console.log(response.data);
          setPassword("");
          setUsername("");
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Username
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                Password
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;