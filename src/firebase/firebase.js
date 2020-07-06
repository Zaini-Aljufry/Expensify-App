import * as firebase from 'firebase' 

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIRBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
  });

 export {firebase,googleAuthProvider, database as default}

//   const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot)
// },(e) =>{
//     console.log(e)
// })

// database.ref('isSingle').remove().then(()=>{
//           console.log('Data is remove')
//       }).catch((e) => {
//           console.log('This Failed', e)
//       })

//   database.ref().set({
//       name: 'haish',
//       age: 26,
//       stressLevel: 6,
//       job:{
//           title: 'consultant',
//           company: 'EY'
//       },
//       isSingle: false,
//       location:{
//           city: 'Singapore',
//           country: 'Singapore'
//       }
//   }).then(()=>{
//       console.log('Data is save')
//   }).catch((e) => {
//       console.log('This Failed', e)
//   })

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'amazon',
//       'location/city': 'orchard'
//   })
