import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ViewNote() {
const { id } = useParams();

const [note, setNote] = useState(null);
const [summary, setSummary] = useState("");

const fetchNote = async () => {
const response = await api.get(`/notes/${id}`);

```
setNote(response.data.data);

if (response.data.data.summary) {
  setSummary(response.data.data.summary);
}
```

};

const generateSummary = async () => {
const response = await api.post(
`/notes/${id}/summary`
);

```
setSummary(response.data.summary);
```

};

useEffect(() => {
fetchNote();
}, []);

if (!note) return <h3>Loading...</h3>;

return ( <div> <h2>{note.title}</h2>

  <p>{note.content}</p>

  <button onClick={generateSummary}>
    Generate Summary
  </button>

  {summary && (
    <>
      <h3>Summary</h3>
      <p>{summary}</p>
    </>
  )}
</div>

);
}

export default ViewNote;
