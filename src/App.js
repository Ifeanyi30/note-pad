import { useObserver } from 'mobx-react';
import './App.css';
import { NewNoteForm } from './newNotesForm';
import { useNotesStore } from './notesContext';

function App() {
  const notesStore = useNotesStore();
  const cursor = {
    cursor: 'pointer'
  }

  return useObserver( () => (
    <>
      <ul>
        {
          notesStore.notes.map(note => (
            <li
            style={cursor}
            onClick={() => notesStore.removeNote(note.id)}
            key={note.id}>{note.text}</li>
          ))
        }
      </ul>
      <NewNoteForm/>
    </>
  ));
}

export default App;
