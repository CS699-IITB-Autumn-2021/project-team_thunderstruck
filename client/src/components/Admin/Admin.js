    import React, {useState} from 'react';
    import axios from "axios";
    
    function Admin(props) {

        const baseURL = "http://localhost:8080"
        const [name, setName] = useState("");
        const [course, setCourse] = useState("");
        const [roll, setRoll] = useState("");
        const [zones, setZones] = useState({
            z1: false,
            z2: false,
            z3: false,
            z4: false,
            z5: false
        });

    
        const handleSubmit = (evt) => {
            evt.preventDefault();
            axios
            .post(baseURL + "/new-case", {
                name: name,
                roll: roll,
                course: course,
                zones: zones
            })
            .then((response) => {
                console.log(response.data);
                setRoll("");
                setName("");
                setCourse("");
            });
        }
        const handleInputChange = (event) => {
            const target = event.target;
            const value = target.checked;
            const name = target.name;

            if (name === "z1")
                setZones({
                    ...zones,
                    z1: value
                });
            else if (name === "z2")
                setZones({
                    ...zones,
                    z2: value
                });
            else if (name === "z3")
            setZones({
                ...zones,
                z3: value
            });
            else if (name === "z4")
                setZones({
                    ...zones,
                    z4: value
                });
            else if (name === "z5")
                setZones({
                    ...zones,
                    z5: value
                });
            
        }

        return (
            <div>
               <form onSubmit={handleSubmit}>
                <label>
                Name
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                Course
                    <input type="password" value={course} onChange={e => setCourse(e.target.value)} />
                </label>
                <label>
                Roll Number
                    <input type="text" value={roll} onChange={e => setRoll(e.target.value)} />
                </label>
                <label>
                Zone 1
                <input
                    name="z1"
                    type="checkbox"
                    checked={zones.z1}
                    onChange={handleInputChange} />
                </label>
                <label>
                Zone 2
                <input
                    name="z2"
                    type="checkbox"
                    checked={zones.z2}
                    onChange={handleInputChange} />
                </label>
                <label>
                Zone 3
                <input
                    name="z3"
                    type="checkbox"
                    checked={zones.z3}
                    onChange={handleInputChange} />
                </label>
                <label>
                Zone 4
                <input
                    name="z4"
                    type="checkbox"
                    checked={zones.z4}
                    onChange={handleInputChange} />
                </label>
                <label>
                Zone 5
                <input
                    name="z5"
                    type="checkbox"
                    checked={zones.z5}
                    onChange={handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
    
    export default Admin;