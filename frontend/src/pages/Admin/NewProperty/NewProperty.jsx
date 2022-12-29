import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import './NewProperty.scss'

//import { app } from '../../../firebase';
import { useCreateProperty } from '../../../Hooks/useApiRequest';
import { uploadFiles } from '../../../firebase';
//import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const NewProperty = () => {
    const { CreateProperty, isLoading, error, success, successMessageDisplay } = useCreateProperty()
    const [radio,setRadio] = useState('False')
    const [formData,setFormData] = useState({
        category:"",propertyType: "",location: "",
        state:"",desc:"",price:0,consultancyFee:0
    })
    function handleChange(e){
        let {name,value} = e.target
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const form = {...formData,isFeatured:radio === 'False' ? false : true}
    //for image preview
    const [imagesPreview, setImagesPreview] = useState(["https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg","https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg"]);
    const [imagesFile,setImagesFile] = useState([])

    const handleMultipleImages =(e)=>{
      const selectedFIles =[];
      const imagesArray = []
      const targetFiles =e.target.files;
      const targetFilesObject= [...targetFiles]
      targetFilesObject.map((file)=>{
        imagesArray.push(file)
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImagesFile(imagesArray)
      setImagesPreview(selectedFIles);
    }

  ///////////////////////////////////////uploadFiles(files)
//   const uploadFiles = (files) => {
//     let img = []
//     const promises = []
//     files.map((file) => {
//         console.log('loop');
//         const storage = getStorage(app)
//         const storageRef = ref(storage, new Date().getTime() + file.name);

//         const uploadTask = uploadBytesResumable(storageRef, file);
//         promises.push(uploadTask)
//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 const prog = Math.round(
//                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 );
//             },
//             (error) => console.log(error),
//             async () => {
//                 await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
//                     img.push(downloadURLs)
//                 });
//                 (imagesPreview.length === img.length) && CreateProperty({...form,img})
//             }
//         );

//     })
//     Promise.all(promises)
//         //.then(() => CreateProperty({...form,img}))
//         .catch(err => console.log(err))
// };

const handleSubmit = async (e) => {
  e.preventDefault()
  uploadFiles(imagesFile,imagesPreview,CreateProperty,form)
 }
    return ( 
        <div className="newProperty">
            <div className="propertyTitleContainer">
                <h1 className="propertyTitle">New Property</h1>
            </div>

            <div className='propertyEditContainer'>
                <form className="form form-holder" onSubmit={handleSubmit}>
                    <div className="propertyEditLeft">
                        <div className="fl-holder">
                          <div className="label">
                            <label htmlFor="category" className="form-label">Category</label>
                          </div>
                          <div className="input-flex">
                            {/* <span><FaUserAlt /></span> */}
                            <input
                              type="text"
                              className="form-control"
                              id="category"
                              name="category"
                              placeholder="Type The Category"
                              onChange={handleChange}
                              value={formData.category}
                            />
                          </div>
                        </div>

                        <div className="fl-holder">
                          <div className="label">
                            <label htmlFor="propertyType" className="form-label">Property Type</label>
                          </div>
                          <div className="input-flex">
                            {/* <span><MdEmail /></span> */}
                            <input
                              type="text"
                              className="form-control"
                              id="propertyType"
                              name="propertyType"
                              placeholder="Enter The Property Type"
                              onChange={handleChange}
                              value={formData.propertyType}
                            />
                          </div>
                        </div>

                        <div className="fl-holder">
                            <div className="label">
                              <label htmlFor="location" className="form-label">Location</label>
                            </div>
                            <div className="input-flex">
                                {/* <span><FaLock /></span> */}
                                <input
                                  type='text'
                                  className="form-control"
                                  id="location"
                                  name="location"
                                  placeholder="Enter location"
                                  onChange={handleChange}
                                  value={formData.location}
                                />
                            </div>
                        </div>
                        <div className="fl-holder">
                            <div className="label">
                              <label htmlFor="state" className="form-label">State</label>
                            </div>
                            <div className="input-flex">
                                {/* <span><FaLock /></span> */}
                                <input
                                  type='text'
                                  className="form-control"
                                  id="state"
                                  name="state"
                                  placeholder="Enter The State"
                                  onChange={handleChange}
                                  value={formData.state}
                                />
                            </div>
                        </div>
                        <div className="fl-holder">
                            <div className="label">
                              <label htmlFor="price" className="form-label">Price</label>
                            </div>
                            <div className="input-flex">
                                {/* <span><FaLock /></span> */}
                                <input
                                  type='number'
                                  className="form-control"
                                  id="price"
                                  name="price"
                                  placeholder="Enter The price"
                                  onChange={handleChange}
                                  value={formData.price}
                                />
                            </div>
                        </div>
                        <div className="fl-holder">
                            <div className="label">
                              <label htmlFor="consultancyFee" className="form-label">consultancyFee</label>
                            </div>
                            <div className="input-flex">
                                {/* <span><FaLock /></span> */}
                                <input
                                  type='number'
                                  className="form-control"
                                  id="consultancyFee"
                                  name="consultancyFee"
                                  placeholder="Enter Consultancy Fee Amount"
                                  onChange={handleChange}
                                  value={formData.consultancyFee}
                                />
                            </div>
                        </div>
                        <div className="fl-holder">
                            <div className="label">
                              <label htmlFor="desc" className="form-label">Description</label>
                            </div>
                            <div className="input-flex">
                                {/* <span><FaLock /></span> */}
                                <textarea
                                  className="form-control"
                                  id="desc"
                                  name="desc"
                                  placeholder="Enter Property Description"
                                  onChange={handleChange}
                                  value={formData.desc}
                                />
                            </div>
                        </div>
                        <div className="newPropertyItem">
                                <label className='radio-label'>isFeatured</label>
                                <div className='radioHolder'>
                                    <span>
                                        <label htmlFor='true'>True</label>
                                        <input
                                          type="radio"
                                          value="True"
                                          id='true'
                                          checked={radio === "True"}
                                          onChange={(e) => setRadio(e.target.value)}
                                          className='radioInput'
                                        />
                                    </span>
                                    <span>
                                        <label htmlFor='false'>False</label>
                                        <input
                                          type="radio"
                                          value="False"
                                          id='false'
                                          checked={radio === "False"}
                                          onChange={(e) => setRadio(e.target.value)}
                                          className='radioInput'
                                        />
                                    </span>
                                </div>
                            </div>
                    </div>
                    <div className="propertyEditRight">
                        <div className="newPropertyUpload">
                            <div className="newPropertyImgHolder">
                                {imagesPreview && imagesPreview.map((url,index) => (
                                    <img key={url + index} src={url} alt="avatar" className="newPropertyImg" />
                                ))}
                            </div>
                    
                            <label htmlFor="file"><MdPublish /></label>
                            <input type="file" id='file' style={{ display:"none"}} multiple onChange={handleMultipleImages}/>
                        </div>
                        <button disabled={isLoading} type="submit" className="propertyCreateButton">Create</button>
                        {error && 
                          (<div className='error'>
                              <p>{error}</p>
                          </div>)}
                        {success && 
                          (<div className='success' style={{"display": successMessageDisplay ? "block" : "none"}}>
                              <p>Property Created Successfully</p>
                          </div>)}
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default NewProperty;