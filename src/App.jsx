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

export const updaterMethod = async (obj) => {
  const dataRef = doc(db, "inputs", `${obj.id}` )
  await updateDoc(dataRef, {
    ...obj
  })
}

export default function App() {

  const writeToDB = async (data) => {
    await addDoc(collection(db, 'inputs'), {...data})
    setWrite(prevState => !prevState)
  }
  const [ write, setWrite ] = useState(false)
  const [ get, setGet ] = useState(false)
  

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
        { get ? <Presentation getFromDB={getFromDB} /> : null }
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}

// export { App, updaterMethod }
