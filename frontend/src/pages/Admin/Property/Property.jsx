import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Property.scss'

const Property = () => {
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
    const [images, setImages] = useState([]);
    console.log(images)
    const handleMultipleImages =(evnt)=>{
      const selectedFIles =[];
      const targetFiles =evnt.target.files;
      const targetFilesObject= [...targetFiles]
      targetFilesObject.map((file)=>{
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImages(selectedFIles);
    }

    return ( 
        <div className="property">
            <div className="propertyTitleContainer">
                <h1 className="propertyTitle">Edit Property</h1>
                <Link to='/adminDashboard/newProperty'>
                <button className="propertyAddButton">Create</button>
                </Link>
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
                        <div className="userUpdateItem">
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
                        <div className="userUpdateUpload">
                            <div className="userUpdateImgHolder">
                                {images && images.map(url => (
                                    <img src={url} alt="avatar" className="userUpdateImg" />
                                ))}
                            </div>
                    
                            <label htmlFor="file"><MdPublish /></label>
                            <input type="file" id='file' style={{ display:"none"}} multiple onChange={handleMultipleImages}/>
                        </div>
                        <button type="submit" className="propertyUpdateButton">Update</button>
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default Property;