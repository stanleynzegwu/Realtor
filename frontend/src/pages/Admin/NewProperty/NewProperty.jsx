import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import './NewProperty.scss'

const NewProperty = () => {
    const [radio,setRadio] = useState('False')
    const [formData,setFormData] = useState({
        category:"",propertyType: "",location: "",
        state:"",desc:"",price:null,consultancyFee:null
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

    //for image preview
    const [images, setImages] = useState(["https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg","https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg","https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg","https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg"]);
    console.log(images)
    const handleMultipleImages =(e)=>{
      const selectedFIles =[];
      const targetFiles =e.target.files;
      const targetFilesObject= [...targetFiles]
      targetFilesObject.map((file)=>{
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImages(selectedFIles);
    }

    return ( 
        <div className="newProperty">
            <div className="propertyTitleContainer">
                <h1 className="propertyTitle">New Property</h1>
            </div>

            <div className='propertyEditContainer'>
                <form className="form form-holder">
                    <div className="propertyEditLeft">
                        <div className="fl-holder">
                          <div className="label">
                            <label for="category" className="form-label">Category</label>
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
                            <label for="propertyType" className="form-label">Property Type</label>
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
                              <label for="location" className="form-label">Location</label>
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
                              <label for="state" className="form-label">State</label>
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
                              <label for="price" className="form-label">Price</label>
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
                              <label for="consultancyFee" className="form-label">consultancyFee</label>
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
                              <label for="desc" className="form-label">Description</label>
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
                                        <label for='true'>True</label>
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
                                        <label for='false'>False</label>
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
                                {images && images.map(url => (
                                    <img src={url} alt="avatar" className="newPropertyImg" />
                                ))}
                            </div>
                    
                            <label htmlFor="file"><MdPublish /></label>
                            <input type="file" id='file' style={{ display:"none"}} multiple onChange={handleMultipleImages}/>
                        </div>
                        <button type="submit" className="propertyCreateButton">Create</button>
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default NewProperty;