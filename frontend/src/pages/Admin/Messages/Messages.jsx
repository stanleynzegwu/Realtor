import './Messages.scss'
import { useRestContext } from '../../../Hooks/useRestContext';

const Messages = () => {
    const { subscribers } = useRestContext()
    let subscribersMail = (subscribers.map(({email}) => (
        email
    )))

    const copyToClipboard = sub => {
      const subscribersString = sub.join("\n");
      navigator.clipboard.writeText(subscribersString);
      console.log('copied to clipboard')
    };
    return ( 
        <div className="Messages">
            <button onClick={() => copyToClipboard(subscribersMail)}>copy to clipboard</button>
        </div>
    );
}
 
export default Messages;