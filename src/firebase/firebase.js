import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCQcINVh-0OgcnPdKMNIsa243-YscGzjuw",
  authDomain: "yoga-admission-284d0.firebaseapp.com",
  projectId: "yoga-admission-284d0",
  storageBucket: "yoga-admission-284d0.appspot.com",
  messagingSenderId: "252027856260",
  appId: "1:252027856260:web:52a590834c83c55ba1a9d1"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase }
export const auth = Firebase.auth()
