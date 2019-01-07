import firebase from './firebase'


//Upload Photos
export const uploadFile = file => {
  console.log("subiendo");
  const task = firebase
    .storage()
    .ref("img")
    .child(file.name)
    .put(file);

  return task.then(snap => snap.ref.getDownloadURL()).then(link => link);
};