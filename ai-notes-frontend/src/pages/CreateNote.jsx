import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CreateNote() {
const navigate = useNavigate();

const [form, setForm] = useState({
title: "",
content: "",
});

const handleSubmit = async (e) => {
e.preventDefault();

await api.post("/notes", form);

navigate("/");


};

return ( 
    <div> 
        <h2>Create Note</h2>

    
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
            setForm({
            ...form,
            title: e.target.value,
            })
        }
        />

        <br /><br />

        <textarea
        placeholder="Content"
        rows="8"
        value={form.content}
        onChange={(e) =>
            setForm({
            ...form,
            content: e.target.value,
            })
        }
        />

        <br /><br />

        <button type="submit">
        Save
        </button>
    </form>
    </div>


);
}

export default CreateNote;
