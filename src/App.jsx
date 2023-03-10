import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Form from './components/Form'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { setDoc, doc, collection, addDoc, query, where, getDocs, updateDoc, deleteDoc} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import Presentation from './components/Presentation';
import Header from './components/Header';

const app = initializeApp(firebaseConfig); // Init firebase with config
const db = getFirestore(app) // access the apps database / firestore

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

  // Delete document from DB
  // Receives obj
  const deleteDocDB = async (data) => {
    await deleteDoc(doc(db, 'inputs', `${data}`))
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
      <Header />
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
        deleteDocDB={deleteDocDB}
        db={db} 
       /> : null }
      </div>
      <div className='footer'>&copy; 2023 <a target="_blank" href='https://www.github.com/doctype-Melvin'>doctypeMelvin</a>  </div>
    </div>
  )
}

// export { App, updaterMethod }
