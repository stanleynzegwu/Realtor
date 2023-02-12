import { useState } from 'react'

import './MessageSubscribers.scss'
import { useRestContext } from '../../../Hooks/useRestContext'
import { useSendBulkMail } from '../../../Hooks/useApiRequest'
import Success from '../../../components/Success/Success'
import { useHandleGoBack } from '../../../Hooks/customHook'
import { TypingText } from '../../../components'
import { ScrollToTop } from '../../../Hooks/customHook'

const MessageSubscribers = () => {
    ScrollToTop()
    const handleGoBack = useHandleGoBack()
    const { subscribers } = useRestContext()
    const subscribersEmail = subscribers && subscribers.map(({email}) => email)

    const [formData, setFormData] = useState({
        emails:subscribersEmail, subject:"",body:""
    })

    const { CreateSendBulk,isLoading, success, error, setError,errorMessageDisplay,seterrorMessageDisplay } = useSendBulkMail()

    const handleChange = (e) => {
        const {name,value} = e.target

        setFormData(prev => {
            return {...prev,[name]:value}
        })
    }

    const handleSubmit = async (e) => {
        const { emails,subject,body } = formData
        e.preventDefault()

        if(!emails || !subject || !body){
            setError("Fill the input fields")
            seterrorMessageDisplay(true)
            setTimeout(() => seterrorMessageDisplay(false),6000)
            return
        }
        await CreateSendBulk(formData)
    }
    return (
        success ?
        <div className='successWrapper'>
            <Success message="Your Mail has been sent successfully."/>
        </div>
        :
        <div className="messageSubscribers">
            <h1 className='messageSubscribers__header'>mail subscribers</h1>
            <div className='messageSubscribers__wrapper'>
                <form onSubmit={handleSubmit} className="messageSubscribers__form">
                    <div className='form__item'>
                        <label >Subject</label>
                        <input 
                            type="text"
                            placeholder='Enter the subject'
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form__item'>
                        <label >Body (HTML)</label>
                        <textarea 
                            name="body"
                            placeholder='Enter the content'
                            cols="30"
                            rows="10"
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>

                    <button disabled={isLoading} className='messageSubscribers__btn'>send</button>
                </form>
                {error && errorMessageDisplay &&
                <TypingText text={error} intervalDuration={50} className='error'/>
                }
            </div>
            <button onClick={handleGoBack} className='backBtn'>Back</button>
        </div>
     );
}
 
export default MessageSubscribers;