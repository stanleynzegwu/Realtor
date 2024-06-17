import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoubVtLsn1bY7737K7MdczPgIS_-lvEck",
  authDomain: "realtor-ae9dd.firebaseapp.com",
  projectId: "realtor-ae9dd",
  storageBucket: "realtor-ae9dd.appspot.com",
  messagingSenderId: "688296243024",
  appId: "1:688296243024:web:3fb525e2c1714f6a628655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//UPLOADING SINGLE IMAGE FUNCTION
const uploadImg = (file,Func,formData) => {
  const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const allFormData = {...formData, img:downloadURL};
          Func(allFormData)
        });
      }
    );
}

//UPLOADING MULTIPLE IMAGES FUNCTION
const uploadFiles = (files,imagesPreview,Func,form) => {
  let img = []
  files.map((file) => {
      console.log('loop');
      const storage = getStorage(app)
      const storageRef = ref(storage, new Date().getTime() + file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
          "state_changed",
          (snapshot) => {
              const prog = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
          },
          (error) => console.log(error),
          async () => {
              await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                  img.push(downloadURLs)
              });
              (imagesPreview.length === img.length) && Func({...form,img})
          }
      );

  })
};

//UPDATING SINGLE IMAGE FUNCTION
const uploadImgAndUpdate = (file,Func,id,formData) => {
  const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const allFormData = {...formData, img:downloadURL};
          Func(id,allFormData)
        });
      }
    );
}


//UPDATING MULTIPLE IMAGES FUNCTION
const uploadMultipleAndUpdate = (files,imagesPreview,id,Func,form) => {
  let img = []
  files.map((file) => {
      // console.log('loop');
      const storage = getStorage(app)
      const storageRef = ref(storage, new Date().getTime() + file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
          "state_changed",
          (snapshot) => {
              const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              // console.log(progress)
          },
          (error) => console.log(error),
          async () => {
              await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                  img.push(downloadURLs)
              });
              (imagesPreview.length === img.length) && Func(id,{...form,img})
          }
      );

  })
};
export { app, uploadImg, uploadFiles, uploadImgAndUpdate , uploadMultipleAndUpdate }

