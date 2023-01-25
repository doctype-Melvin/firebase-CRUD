import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Form from './components/Form'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { setDoc, doc, collection, addDoc} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

function App() {

  const writeToDB = async (data) => {
    await addDoc(collection(db, 'data'), {...data})
  }
  const [ write, setWrite ] = useState(false)

  return (
    <div className="App">
      <div className='header'>Header</div>
      <div className='sidebar'>
        <Buttons
        write={write}
        setWrite={setWrite}
        />
      </div>
      <div className='main'>
        {write ? <Form toDb={writeToDB} /> : null}
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}

export default App
