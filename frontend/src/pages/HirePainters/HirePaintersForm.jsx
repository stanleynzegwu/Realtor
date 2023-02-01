import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import { Link } from 'react-router-dom'

import painterIllustration from '../../assets/logos/painterIllustration.png'
import { useCreateHirePainterRequest } from '../../Hooks/useApiRequest'
import { uploadFiles } from '../../firebase'
import { ScrollToTop, useHandleGoBack } from '../../Hooks/customHook'
import { TypingText } from '../../components'
import './HirePaintersForm.scss'

const HirePaintersForm = () => {
    ScrollToTop()
    const handleGoBack = useHandleGoBack()
    const { CreateHirePainterRequest,isLoading,success, setError, error,
        setIsLoading, errorMessageDisplay,seterrorMessageDisplay} = useCreateHirePainterRequest()

    const [imagesFile,setImagesFile] = useState([])
    //for image preview
    const [imagesPreview, setImagesPreview] = useState([]);

    const [formData,setFormData] = useState({
        address:"",sqft: "",startDate:"",completionDate:"",
        type_Of_Paint:"",painting_service:"",paint_provider:"",consultation:"",repairs_needed:"",
        budget:"",special_request:"",customer_name:"",customer_email:"",
        customer_number:""
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
        const {address,sqft,painting_service,paint_provider,
        consultation,budget,customer_name,customer_email,customer_number} = formData
        setError(null)
        
        // Check that all form fields are filled out
        if(!address || !sqft || !painting_service || !paint_provider || !consultation 
            || !budget || !imagesFile.length || !customer_name || !customer_email || !customer_number) {
          setError("All Required Input Field Must Be Filled");
          console.log(error)
          seterrorMessageDisplay(true)
          setTimeout(() => seterrorMessageDisplay(false),6000)
          return;
        }
        setIsLoading(true)
        uploadFiles(imagesFile,imagesPreview,CreateHirePainterRequest,formData)
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
        <div className="hirePainters">
            <div className="hire_wrapper">
                <div className="hire_left">
                    <h1>Bring Your Property to Life - Request a Painter Today</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form_field">
                            <label>Address of Property <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter Address of property that needs painting"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_field">
                            <label>Size of Property (square footage) <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter square footage of property"
                                type="number"
                                name="sqft"
                                value={formData.sqft}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_field">
                            <label>Preffered Start Date <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="Enter the preffered start date"
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_field">
                            <label>Preffered Completion Date <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="Enter the preffered completion date"
                                type="date"
                                name="completionDate"
                                value={formData.completionDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_field">
                            <label>Type of Paint Desired <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="e.g. matte, glossy, satin"
                                type="text"
                                name="type_Of_Paint"
                                value={formData.type_Of_Paint}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="dropdownLabel">Select from the dropdown menus</p>
                        <div className='select_group'>
                            <select
                                name="painting_service"
                                id="painting_service"
                                value={formData.painting_service}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Painting Service</option>
                                <option value='interior'>interior</option>
                                <option value='exterior'>exterior</option>
                                <option value='both'>both</option>
                            </select>
                            <select
                                name="paint_provider"
                                id="paint_provider"
                                value={formData.paint_provider}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Paint Provider</option>
                                <option value='customer'>customer (you)</option>
                                <option value='company'>company (us)</option>
                            </select>
                            <select
                                name="consultation"
                                id="consultation"
                                value={formData.consultation}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Consultation</option>
                                <option value='yes'>yes</option>
                                <option value='no'>no</option>
                            </select>
                            <select
                                name="repairs_needed"
                                id="repairs_needed"
                                value={formData.repairs_needed}
                                onChange={handleChange}
                            >   
                                <option value='' disabled>Repairs Needed</option>
                                <option value='yes'>yes</option>
                                <option value='no'>no</option>
                            </select>
                        </div>
                        <div className="form_field">
                            <label>Budget <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter budget for the project"
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
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
                            <label>Special Request <span className='reqOrOpt'>(optional)</span></label>
                            <input 
                                placeholder="Enter anuy special request or instruction"
                                type="text"
                                name="special_request"
                                value={formData.special_request}
                                onChange={handleChange}
                            />
                        </div>
                        <p className='contactInfo_text'>Contact Information</p>
                        <div className="form_field">
                            <label>Full Name <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter your name"
                                type="text"
                                name="customer_name"
                                value={formData.customer_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_field">
                            <label>Email <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter your email Address"
                                type="email"
                                name="customer_email"
                                value={formData.customer_email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form_field">
                            <label>Phone Number <span className='reqOrOpt'>(required)</span></label>
                            <input 
                                placeholder="Enter your phone number"
                                type="number"
                                name="customer_number"
                                value={formData.customer_number}
                                onChange={handleChange}
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

                <div className="hire_right">
                    <p className="hire_heading">Ready to Sell Your Property? Fill out the Form</p>
                    <p className="hire_sub-text">A dash of the masterful brushstroke from our skilled painter will imbue your structure with a radiant gleam, 
                    transforming it into a visually stunning masterpiece that will leave a lasting impression on everyone who sees it.<br/>
                    <br/>
                    Our painter's expertise in color theory, composition, and technique will elevate the look and feel of your building, 
                    making it stand out in a sea of bland, unremarkable structures.<br/>
                    <br/>
                    Whether you're looking to revamp a tired facade or simply add a touch of flair, 
                    our painter has the skills and vision to bring your vision to life.</p>
                    <img className="hire_illustation" src={painterIllustration} alt="forSale" />
                </div>
            </div>
            <button onClick={handleGoBack} className='backBtn'>Back</button>
        </div>
     );
}
 
export default HirePaintersForm;