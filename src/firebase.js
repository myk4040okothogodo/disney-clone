import { initializeApp }  from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from  "@firebase/storage";
import { GoogleAuthProvider } from "@firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBYYD5hFHM2yGXoggYpbbT4BDYyPjm5U-Y",
  authDomain: "disneyplus-clone-3746a.firebaseapp.com",
  projectId: "disneyplus-clone-3746a",
  storageBucket: "disneyplus-clone-3746a.appspot.com",
  messagingSenderId: "959176800609",
  appId: "1:959176800609:web:cd800468835a97f7466d20"
};



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage};
export default db;
