//EXTERNAL IMPORTS
import { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { MdPublish } from 'react-icons/md'

//INTERNAL IMPORTS
import './Property.scss'
import { usePropertyContext } from '../../../Hooks/usePropertyContext'
import { useUpdateProperty } from '../../../Hooks/useApiRequest'
import { uploadMultipleAndUpdate } from '../../../firebase'
import { TypingText } from '../../../components';

const Property = () => {
  const { UpdateProperty,isLoading, success,error } = useUpdateProperty()
  const { id } = useParams()
  const { properties } = usePropertyContext()
  const [ property ] = properties.data.filter((property) => property._id === id)

  const [radio,setRadio] = useState(property.isFeatured ? "True" : "False")
    const [formData,setFormData] = useState({
        category:property.category,propertyType: property.propertyType,location: property.location,
        state:property.state,desc:property.desc,price:property.price,consultancyFee:property.consultancyFee
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
    const form = {...formData, isFeatured:radio === "True"? true : false}
    //for image preview
    const [preview,setPreview] = useState([...property.img])
    const [images, setImages] = useState("");

    const handleMultipleImages =(e)=>{
      const selectedFIles =[];
      const imagesArray = []
      const targetFiles =e.target.files;
      const targetFilesObject= [...targetFiles]
      targetFilesObject.map((file)=>{
        imagesArray.push(file)
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImages(imagesArray)
      setPreview(selectedFIles);
    }

    async function handleSubmit(e) {
      e.preventDefault()

      if(images){
        uploadMultipleAndUpdate(images,preview,id,UpdateProperty,form)
      //else when there is no image file, just do other updates, no img to upload to firebase
      }else{
        await UpdateProperty(id,form)
      }
      await UpdateProperty(id,form)
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
                <form className="form form-holder" onSubmit={handleSubmit}>
                    <div className="propertyEditLeft">
                        <div className="fl-holder">
                          <div className="label">
                            <label htmlFor="category" className="form-label">Category</label>
                          </div>
                          <div className="input-flex">
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
                        <div className="userUpdateUpload">
                            <div className="userUpdateImgHolder">
                                {preview && preview.map((url,index) => (
                                    <img key={index}src={url} alt="property" className="userUpdateImg" />
                                ))}
                            </div>
                    
                            <label htmlFor="file"><MdPublish /></label>
                            <input type="file" id='file' style={{ display:"none"}} multiple onChange={handleMultipleImages}/>
                        </div>
                        <button disabled={isLoading} type="submit" className="propertyUpdateButton">Update</button>
                        {error && <TypingText text={error} intervalDuration={50} className='error'/>}
                        {success && <TypingText text='Blog Updated Successfully' intervalDuration={50} className='success'/>}
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default Property;