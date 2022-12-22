import { MdVisibility } from 'react-icons/md'

import './WidgetSm.scss'

const WidgetSm = () => {
    return ( 
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className='widgetSmImg'/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lionel Messi</span>
                        <span className="widgetSmUseremail">lionelMessi@gmail.com</span>
                    </div>
                    <button className='widgetSmButton'>
                        <MdVisibility />Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className='widgetSmImg'/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lionel Messi</span>
                        <span className="widgetSmUseremail">lionelMessi@gmail.com</span>
                    </div>
                    <button className='widgetSmButton'>
                        <MdVisibility />Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className='widgetSmImg'/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lionel Messi</span>
                        <span className="widgetSmUseremail">lionelMessi@gmail.com</span>
                    </div>
                    <button className='widgetSmButton'>
                        <MdVisibility />Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className='widgetSmImg'/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lionel Messi</span>
                        <span className="widgetSmUseremail">lionelMessi@gmail.com</span>
                    </div>
                    <button className='widgetSmButton'>
                        <MdVisibility />Display
                    </button>
                </li>
                
                <li className="widgetSmListItem">
                    <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className='widgetSmImg'/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lionel Messi</span>
                        <span className="widgetSmUseremail">lionelMessi@gmail.com</span>
                    </div>
                    <button className='widgetSmButton'>
                        <MdVisibility />Display
                    </button>
                </li>
            </ul>
        </div>
     );
}
 
export default WidgetSm;