import { useState } from 'react'
import './NewBlog.scss'
import { useGenerateImage, useGenerateText } from '../../../Hooks/useApiRequest'

const NewBlog = () => {
    const { generateImg } = useGenerateImage()
    const { generateText } = useGenerateText()

    const [generateForm,setGenerateForm] = useState({
        imgPrompt: '',textPrompt: ''
    })
    const [generatedPrompts,setGeneratedPrompts] = useState({
        imgUrl:'', text:''
    })
    console.log(generatedPrompts)
    
    function handleChange(e){
        let {name,value} = e.target
        setGenerateForm(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const handleSubmitImg = async (e) => {
        e.preventDefault()
        const { imgPrompt } = generateForm
        if(!imgPrompt){
            console.log('enter image description')
        }else{
            const res = await generateImg({ imgPrompt })
            setGeneratedPrompts(prev => (
                {...prev,imgUrl: res.data.data}
            ))
        }
    }
    const handleSubmitText = async (e) => {
        e.preventDefault()
        const { textPrompt } = generateForm
        if(!textPrompt){
            console.log('enter text description')
        }else{
            const res = await generateText({ textPrompt })
            setGeneratedPrompts(prev => (
                {...prev,text: res.data.data}
            ))
        }
    }

    return ( 
        <div className="newBlog">
            <div className="newBlog__generate">
                <div className="newBlog__left">
                    <form className="generateImgForm" onSubmit={handleSubmitImg}>
                        <div className="generateForm_imgHolder">
                            <label className='imgLabel' htmlFor="">Image</label>
                            <input name='imgPrompt'
                            value={generateForm.imgPrompt}
                            className='imgInput' 
                            type="text"
                            onChange={handleChange}
                            />
                        </div>
                        <button>Generate Image</button>
                    </form>
                    <form className="generateTextForm" onSubmit={handleSubmitText}>
                        <div className="generateForm_textHolder">
                            <label className='textLabel' htmlFor="">Text</label>
                            <input name='textPrompt'
                            value={generateForm.textPrompt}
                            className='textInput' 
                            type="text"
                            onChange={handleChange}
                            />
                        </div>
                        <button>Generate Image</button>
                    </form>
                </div>
                <div className="newBlog__right">
                    <img src={generatedPrompts.imgUrl} alt="" />
                    <p>{generatedPrompts.text}</p>
                </div>
            </div>
        </div>
     );
}
 
export default NewBlog;