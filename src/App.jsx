import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Form from './components/Form'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { setDoc, doc, collection, addDoc, query, where, getDocs, updateDoc} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import Presentation from './components/Presentation';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default function App() {
  
  const [ write, setWrite ] = useState(false)
  const [ get, setGet ] = useState(false)

  // Create new document in DB
  // Receives object
  const writeToDB = async (data) => {
    await setDoc(doc(db, 'inputs', `${data.id}`), {...data})
    setWrite(prevState => !prevState)
  }

  // Update document in DB
  // Receives object
  const updateDocDB = async (data) => {
    const docRef = doc(db, 'inputs', `${data.id}`)
    await updateDoc(docRef, {
      ...data
    })
  }
  
  // Fetch collection from DB
  const getFromDB = async () => {
    let array = []
    const q = query(collection(db, 'inputs'))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      array.push(doc.data())
    })
    return array
  }

  return (
    <div className="App">
      <div className='header'>Header</div>
      <div className='sidebar'>
        <Buttons
        write={write}
        setWrite={setWrite}
        get={get}
        setGet={setGet}
        getFromDB={getFromDB}
        />
      </div>
      <div className='main'>
        { write ? <Form writeToDb={writeToDB} /> : null }
        { get ?
        <Presentation 
        getFromDB={getFromDB}
        updateDocDB={updateDocDB}
        db={db} 
       /> : null }
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}

// export { App, updaterMethod }
