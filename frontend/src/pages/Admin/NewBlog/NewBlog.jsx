// import { useState } from 'react'
// import './NewBlog.scss'
// import { useGenerateImage, useGenerateText, useCreateBlog } from '../../../Hooks/useApiRequest'
// import illustration from '../../../assets/logos/blogIllustration.png'

// const NewBlog = () => {
//     const { generateImg,isGenerateImgLoading,generateImgSuccess,generateImgError} = useGenerateImage()
//     const { generateText,isGenerateTextError,isGenerateTextLoading,isGenerateTextSuccess } = useGenerateText()
//     const { createBlog,isGenerateCreateLoading,isGenerateCreateError,isGenerateCreateSuccess } = useCreateBlog()

//     const [generateForm,setGenerateForm] = useState({imgPrompt: '',textPrompt: '',title:''})
//     const [generatedPrompts,setGeneratedPrompts] = useState({imgUrl:'', text:''})
//     console.log(generateForm)
//     console.log(generatedPrompts)

//     function handleChange(e){
//         let {name,value} = e.target
//         setGenerateForm(data => {
//             return {
//                 ...data,
//                 [name]: value
//             }
//         })
//     }
//     //to generate image url
//     const handleSubmitImg = async (e) => {
//         e.preventDefault()
//         const { imgPrompt } = generateForm
//         if(!imgPrompt){
//             console.log('enter image description')
//         }else{
//             const res = await generateImg({ imgPrompt })
//             setGeneratedPrompts(prev => (
//                 {...prev,imgUrl: res.data.data}
//             ))
//         }
//     }

//     //to generate text
//     const handleSubmitText = async (e) => {
//         e.preventDefault()
//         const { textPrompt } = generateForm
//         if(!textPrompt){
//             console.log('enter text description')
//         }else{
//             const res = await generateText({ textPrompt })
//             setGeneratedPrompts(prev => (
//                 {...prev,text: res.data.data}
//             ))
//         }
//     }

//     //Create Blog
//     const handleCreateBlog = async (e) => {
//         e.preventDefault()
//         const { title } = generateForm
//         const { imgUrl, text } = generatedPrompts
//         if(!title || !imgUrl || !text){
//             console.log('you have to generate everything before creating...')
//         }else{
//             const formData = {title,desc:text,img:imgUrl}

//             try{
//                 const res = await createBlog(formData)
//                 console.log(res)
//             }catch(err){
//                 console.log(err)
//             }
//         }
//     }

//     return ( 
//         <div className="newBlog">
//             <div className="newBlog__generate">
//                 <div className="newBlog__left">
//                     <img className='illustration' src={illustration} alt="illustration" />
//                     <div className='form-left__wrapper'>
//                         <form className="generateImgForm form-left" onSubmit={handleSubmitImg}>
//                             <div className="generateForm_imgHolder form-left__holder">
//                                 <label className='imgLabel form-lef_label' htmlFor="">Image Description</label>
//                                 <input name='imgPrompt'
//                                 value={generateForm.imgPrompt}
//                                 className='imgInput form-left__input'
//                                 placeholder='Enter Image Description'
//                                 type="text"
//                                 onChange={handleChange}
//                                 />
//                             </div>
//                             <button disabled={isGenerateImgLoading} className='form-left__btn'>Generate Image</button>
//                         </form>
//                         <form className="generateTextForm form-left" onSubmit={handleSubmitText}>
//                             <div className="form-left__holder">
//                                 <label className='textLabel form-lef_label' htmlFor="">Text Description</label>
//                                 <input name='textPrompt'
//                                 value={generateForm.textPrompt}
//                                 className='textInput form-left__input'
//                                 placeholder='Enter Text Description'
//                                 type="text"
//                                 onChange={handleChange}
//                                 />
//                             </div>
//                             <button disabled={isGenerateTextLoading} className='form-left__btn'>Generate Writeup</button>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="newBlog__right">
//                     <img className='generated-Image' src={generatedPrompts.imgUrl} alt="generated" />
//                     <p className='generated_title'>{generateForm.title}</p>
//                     <p className='generated-text'>{generatedPrompts.text}</p>
//                 </div>
//             </div>

//             <div className="createBlog">
//                 <form className='createBlog__form' onSubmit={handleCreateBlog}>
//                     <div className='createBlog__holder'>
//                         <input 
//                         className='createBlog__input'
//                         name='title'
//                         placeholder='Enter The Heading'
//                         value={generateForm.title}
//                         onChange={handleChange}
//                         type="text" />
//                     </div>
//                     <button disabled={isGenerateCreateLoading} className='createBlog__btn'>Create</button>
//                 </form>
//             </div>
//         </div>
//      );
// }
 
// export default NewBlog;



import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import './NewBlog.scss'

import { uploadImg } from '../../../firebase'
import { useGenerateImage, useGenerateText, useCreateBlog } from '../../../Hooks/useApiRequest'
import illustration from '../../../assets/logos/blogIllustration.png'

const NewBlog = () => {
    const { generateImg,isGenerateImgLoading,generateImgSuccess,generateImgError} = useGenerateImage()
    const { generateText,isGenerateTextError,isGenerateTextLoading,isGenerateTextSuccess } = useGenerateText()
    const { createBlog,isLoading,setIsLoading,setError,setSuccess } = useCreateBlog()

    const [generateForm,setGenerateForm] = useState({textPrompt: '',title:''})
    const [generatedText,setGeneratedText] = useState('')
    const [preview, setPreview] = useState()
    const [file,setFile] = useState('')
    console.log(generateForm)
    console.log(generatedText)

    function handleChange(e){
        let {name,value} = e.target
        setGenerateForm(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    //handle Image Change
    function handleImageChange(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

    //to generate text
    const handleSubmitText = async (e) => {
        e.preventDefault()
        const { textPrompt } = generateForm
        if(!textPrompt){
            console.log('enter text description')
        }else{
            const res = await generateText({ textPrompt })
            setGeneratedText(res.data.data)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const { title } = generateForm
        
        setError(null)
        setIsLoading(true)
        // Check that all form fields are filled out
        if(!title || !file || !generatedText) {
          setIsLoading(false)
          setError('Check That Title,Generated Text & Image field are not Empty');
          console.log('Please fill out all form fields')
          //setErrorMessageDisplay(true)
          //setTimeout(() => setErrorMessageDisplay(false),6000)
          return;
        }
        const formData = {title,desc:generatedText}
        uploadImg(file,createBlog,formData)
    }

    return ( 
        <div className="newBlog">
            <div className="newBlog__generate">
                <div className="newBlog__left">
                    <img className='illustration' src={illustration} alt="illustration" />
                    <div className='form-left__wrapper'>
                        <form className="generateImgForm form-left">
                            <div className="newUserItem">
                                <label htmlFor="file">Upload Image<MdPublish /></label>
                                <input type="file" id='file' name="img" style={{ display:"none"}} onChange={handleImageChange}/>
                            </div>
                        </form>
                        <form className="generateTextForm form-left" onSubmit={handleSubmitText}>
                            <div className="form-left__holder">
                                <label className='textLabel form-lef_label' htmlFor="">Text Description</label>
                                <input name='textPrompt'
                                value={generateForm.textPrompt}
                                className='textInput form-left__input'
                                placeholder='Enter Text Description'
                                type="text"
                                onChange={handleChange}
                                />
                            </div>
                            <button disabled={isGenerateTextLoading} className='form-left__btn'>Generate Writeup</button>
                        </form>
                    </div>
                </div>
                <div className="newBlog__right">
                    <img src={preview ? preview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className='generated-Image' />
                    <p className='generated_title'>{generateForm.title}</p>
                    <p className='generated-text'>{generatedText}</p>
                </div>
            </div>

            <div className="createBlog">
                <form className='createBlog__form' onSubmit={handleSubmit}>
                    <div className='createBlog__holder'>
                        <input 
                        className='createBlog__input'
                        name='title'
                        placeholder='Enter The Heading'
                        value={generateForm.title}
                        onChange={handleChange}
                        type="text" />
                    </div>
                    <button disabled={isLoading} className='createBlog__btn'>Create</button>
                </form>
            </div>
        </div>
     );
}
 
export default NewBlog;