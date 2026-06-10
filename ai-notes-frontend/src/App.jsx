import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesList from "./pages/NotesList";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import ViewNote from "./pages/ViewNote";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<NotesList />} />
<Route path="/create" element={<CreateNote />} />
<Route path="/notes/:id" element={<ViewNote />} />
<Route path="/notes/:id/edit" element={<EditNote />} /> </Routes> </BrowserRouter>
);
}

export default App;
