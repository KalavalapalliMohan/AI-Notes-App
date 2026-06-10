import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchNotes = async (page = 1) => {
    try {
      const response = await api.get(`/notes?page=${page}`);

      setNotes(response.data.data.data);
      setCurrentPage(response.data.data.current_page);
      setLastPage(response.data.data.last_page);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    if (!search.trim()) {
      fetchNotes();
      return;
    }

    try {
      const response = await api.get(
        `/notes-search?query=${search}`
      );

      setNotes(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/notes/${id}`);

      fetchNotes(currentPage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Notes App</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button
          onClick={handleSearch}
          style={{ marginLeft: "10px" }}
        >
          Search
        </button>

        <Link to="/create">
          <button
            style={{ marginLeft: "10px" }}
          >
            Create Note
          </button>
        </Link>
      </div>

      {notes.length === 0 ? (
        <p>No Notes Found</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <h3>{note.title}</h3>

            <p>{note.content}</p>

            <Link
              to={`/notes/${note.id}`}
            >
              View
            </Link>

            {" | "}

            <Link
              to={`/notes/${note.id}/edit`}
            >
              Edit
            </Link>

            {" | "}

            <button
              onClick={() =>
                deleteNote(note.id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() =>
            fetchNotes(currentPage - 1)
          }
        >
          Previous
        </button>

        <span
          style={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {currentPage} / {lastPage}
        </span>

        <button
          disabled={
            currentPage === lastPage
          }
          onClick={() =>
            fetchNotes(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NotesList;