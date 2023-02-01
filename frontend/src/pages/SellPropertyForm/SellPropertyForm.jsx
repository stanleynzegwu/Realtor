import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPublish } from 'react-icons/md'

import "./SellPropertyForm.scss"
import forSaleImg from '../../assets/logos/for_sale.png'
import { useCreateSellProperty } from '../../Hooks/useApiRequest'
import { uploadFiles } from '../../firebase'
import { ScrollToTop, useHandleGoBack } from '../../Hooks/customHook'
import { TypingText } from '../../components'

const SellPropertyForm = () => {
    ScrollToTop()
    const handleGoBack = useHandleGoBack()
    const { CreatePropertyForSale,isLoading,success, setError, error,
    setIsLoading, errorMessageDisplay,seterrorMessageDisplay} = useCreateSellProperty()
    

    const [imagesFile,setImagesFile] = useState([])
    //for image preview
    const [imagesPreview, setImagesPreview] = useState([]);
    const [formData,setFormData] = useState({
        property_type:"",location: "",Sqft: "",yearBuilt:"",zoning:"",
        topography:"",plotSize:"",condition:"",features:"",description:"",
        asking_price:"",documents:"",additional_info:"",fullname:"",
        soil_Type:"",email:"",number:""
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

    const handleSubmit = async (e) => {
      e.preventDefault()
      const {property_type,location,plotSize,description,
      asking_price,documents,fullname,email,number} = formData
      setError(null)
      
      // Check that all form fields are filled out
      if(!property_type || !location || !plotSize || !imagesFile.length || !description
        || !asking_price || !documents || !fullname || !email || !number) {
        setError("All Required Input Field Must Be Filled");
        console.log(error)
        seterrorMessageDisplay(true)
        setTimeout(() => seterrorMessageDisplay(false),6000)
        return;
      }
      setIsLoading(true)
      uploadFiles(imagesFile,imagesPreview,CreatePropertyForSale,formData)
     }

    return (
        success
        ?
        <div className='success'>
            <div className='success__emojiHolder'>
                <span className="thumbs-up">
                  👍
                </span>
            </div>
            <div className='success__messageHolder'>
                <h3>
                    Thank You
                </h3>
                <p>
                    Your Form was successfully submitted, we'll get back to you soon.
                </p>
            </div>
            <Link to='/'>
                <span>Back to home</span>
            </Link>
        </div>
        :
        <div className="sellProperty">
            <div className="sellProperty_wrapper">
                <div className="sellProperty_left">
                    <h1>Ready to Sell? Submit the Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form_field">
                            <label>Property Type <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="E.g house, apartment, land, commercial building"
                                type="text"
                                name="property_type"
                                onChange={handleChange}
                                value={formData.property_type}
                            />
                        </div>
                        <div className="form_field">
                            <label>Address/Location <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter property loaction"
                                type="text"
                                name="location"
                                onChange={handleChange}
                                value={formData.location}
                            />
                        </div>
                        <div className="form_field">
                            <label>Square footage <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="Enter the sqft of the property(if building)"
                                type="number"
                                name="Sqft"
                                onChange={handleChange}
                                value={formData.Sqft}
                            />
                        </div>
                        <div className="form_field">
                            <label>Year Built <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="Enter the year built(if building)"
                                type="number"
                                name="yearBuilt"
                                onChange={handleChange}
                                value={formData.yearBuilt}
                            />
                        </div>
                        <div className="form_field">
                            <label>Plot Size(Lot size) <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter the plot size"
                                type="number"
                                name="plotSize"
                                onChange={handleChange}
                                value={formData.plotSize}
                            />
                        </div>
                        <div className="form_field">
                            <label>Property Condition <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="E.g. new, renovated, needs work(if building)"
                                type="text"
                                name="condition"
                                onChange={handleChange}
                                value={formData.condition}
                            />
                        </div>
                        <div className="form_field">
                            <label>Property Features <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="E.g garage, pool, central air(if building)"
                                type="text"
                                name="features"
                                onChange={handleChange}
                                value={formData.features}
                            />
                        </div>
                        <p className="dropdownLabel">Select from the dropdown menus (if Land)</p>
                        <div className='select_group'>
                            <select
                                name="zoning"
                                id="zoning"
                                value={formData.zoning}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Zoning(if land)</option>
                                <option value='residential'>residential</option>
                                <option value='commercial'>commercial</option>
                                <option value='agricultural'>agricultural</option>
                                <option value='industrial'>industrial</option>
                            </select>
                            <select
                                name="topography"
                                id="topography"
                                value={formData.topography}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Topography(if land)</option>
                                <option value='flat'>flat</option>
                                <option value='sloping'>sloping</option>
                                <option value='hilly'>hilly</option>
                                <option value='mountainous'>mountainous</option>
                            </select>
                            <select
                                name="soil_Type"
                                id="soil_Type"
                                value={formData.soil_Type}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Soil Type(if land)</option>
                                <option value='clay'>clay</option>
                                <option value='sand'>sand</option>
                                <option value='loam'>loam</option>
                                <option value='rocky'>rocky</option>
                            </select>
                        </div>
                        <div className="form_field">
                            <label>Description <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter description including any unique features"
                                type="text"
                                name="description"
                                onChange={handleChange}
                                value={formData.description}
                            />
                        </div>
                        <div className="form_field">
                            <label>Asking price <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter Asking price"
                                type="number"
                                name="asking_price"
                                onChange={handleChange}
                                value={formData.asking_price}
                            />
                        </div>
                        <div className="form_field">
                            <div className="formImgHolder">
                                {imagesPreview && imagesPreview.map((url,index) => (
                                    <img key={url + index} src={url} alt="form_img" className='form_img'/>
                                ))}
                            </div>
                            
                            <label htmlFor="file" className='label_imgUpload'>Upload Image<MdPublish /></label>
                            <input type="file" id='file' style={{ display:"none"}} multiple onChange={handleMultipleImages}/>
                        </div>
                        <div className="form_field">
                            <label>Property Documents <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="E.g. title deeds"
                                type="text"
                                name="documents"
                                onChange={handleChange}
                                value={formData.documents}
                            />
                        </div>
                        <div className="form_field">
                            <label>Additional Information <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="e.g. any recent upgrades or renovations, special selling points"
                                type="text"
                                name="additional_info"
                                onChange={handleChange}
                                value={formData.additional_info}
                            />
                        </div>
                        <p className='contactInfo_text'>Contact Information</p>
                        <div className="form_field">
                            <label>Full Name <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter your fullname"
                                type="text"
                                name="fullname"
                                onChange={handleChange}
                                value={formData.fullname}
                            />
                        </div>
                        <div className="form_field">
                            <label>Email <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter your email Address"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="form_field">
                            <label>Phone Number <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter your phone number"
                                type="number"
                                name="number"
                                onChange={handleChange}
                                value={formData.number}
                            />
                        </div>
                        <button disabled={isLoading} className="submitBtn">Submit</button>
                        {error
                          &&
                          errorMessageDisplay
                          &&
                          <TypingText text={error} intervalDuration={50} className='error'/>
                        }
                    </form>
                </div>

                <div className="sellProperty_right">
                    <p className="sellPropertyRight_heading">Ready to Sell Your Property? Fill out the Form</p>
                    <p className="sellPropertyRight_sub-text">We understand that owning a landed property or a land can be a valuable asset, but it may also come with its own set of challenges. Whether you're looking to downsize, upgrade, or simply need to sell your property or land quickly, we're here to help.</p>
                    <img className="sellProperty_illustation" src={forSaleImg} alt="forSale" />
                </div>
            </div>
            <button onClick={handleGoBack} className='backBtn'>Back</button>
        </div>
     );
}
 
export default SellPropertyForm;