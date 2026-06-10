import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditNote() {
const { id } = useParams();
const navigate = useNavigate();

const [form, setForm] = useState({
title: "",
content: "",
});

useEffect(() => {
loadNote();
}, []);

const loadNote = async () => {
const response = await api.get(`/notes/${id}`);

```
setForm({
  title: response.data.data.title,
  content: response.data.data.content,
});
```

};

const handleSubmit = async (e) => {
e.preventDefault();


await api.put(`/notes/${id}`, form);

navigate("/");


};

return ( <div> <h2>Edit Note</h2>


  <form onSubmit={handleSubmit}>
    <input
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
      Update
    </button>
  </form>
</div>


);
}

export default EditNote;
