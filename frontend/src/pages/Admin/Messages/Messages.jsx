import { MdVisibility } from 'react-icons/md'
import './Messages.scss'
import { useRestContext } from '../../../Hooks/useRestContext';

const Messages = () => {
    const { supportRequests,buyPropertyRequests,sellPropertyRequests,painterRequests } = useRestContext()

    return ( 
        <div className="Messages">
            <h1>All Requests</h1>

            <div className="Messages-item">
                <h2>Support Requests</h2>
                <span>
                {supportRequests && `${supportRequests.length} request${supportRequests.length > 1 ? 's' : ''}`}
                </span>
                <MdVisibility />
                <div className='messageWrapper'>
                    { supportRequests?.map(({_id,email,message,name,phoneNumber}) => (
                        <div className="message-item" key={_id}>
                            <span className="name">{name}</span>
                            <span className="email">{email}</span>
                            <span className="phoneNumber">{phoneNumber}</span>
                            <p className="message">{message}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Messages-item">
                <h2>Buy Property Requests</h2>
                <span>
                    {buyPropertyRequests && `${buyPropertyRequests.length} request${buyPropertyRequests.length > 1 ? 's' : ''}`}
                </span>
                <MdVisibility />
                <div className='messageWrapper'>
                    { buyPropertyRequests?.map(({_id,property_id,email,message,name,phoneNumber}) => (
                        <div className="message-item" key={_id}>
                            <span className="id">{property_id}</span>
                            <span className="name">{name}</span>
                            <span className="email">{email}</span>
                            <span className="phoneNumber">{phoneNumber}</span>
                            <p className="message">{message}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Messages-item">
                <h2>Sell Property Requests</h2>
                <span>
                {sellPropertyRequests && `${sellPropertyRequests.length} request${sellPropertyRequests.length > 1 ? 's' : ''}`}
                </span>
                <MdVisibility />
                <div className='messageWrapper'>
                    { sellPropertyRequests?.map(({_id,sqft,additional_info,asking_price,condition,description,documents,
                    email,features,fullname,img,location,number,plotSize,property_type,soil_type,topography,yearBuilt,zoning}) => (
                        <div className="message-item" key={_id}>
                            <div className='property_img'>
                                {img?.map((img,index) => (
                                    <img src={img} alt="property" key={index}/>
                                ))}
                            </div>
                            <span className="property_type">{property_type}</span>
                            <span className="location">{location}</span>
                            <span className="sqft">{sqft}</span>
                            <span className="yearBuilt">{yearBuilt}</span>
                            <span className="plotSize">{plotSize}</span>
                            <span className="condition">{condition}</span>
                            <span className="features">{features}</span>
                            <span className="zoning">{zoning}</span>
                            <span className="topography">{topography}</span>
                            <span className="soil_type">{soil_type}</span>
                            <p className="description">{description}</p>
                            <span className="asking_price">{asking_price}</span>
                            <span className="documents">{documents}</span>
                            <span className="additional_info">{additional_info}</span>
                            <span className="fullname">{fullname}</span>
                            <span className="email">{email}</span>
                            <span className="number">{number}</span>

                        </div>
                    ))}
                </div>
            </div>

            <div className="Messages-item">
                <h2>Painter Requests</h2>
                <span>
                {painterRequests && `${painterRequests.length} request${painterRequests.length > 1 ? 's' : ''}`}
                </span>
                <MdVisibility />
                <div className='messageWrapper'>
                    { painterRequests?.map(({_id,address,budget,startDate,completionDate,consultation,customer_email,sqft,
                    customer_name,customer_number,img,paint_provider,painting_service,repairs_needed,special_request,type_Of_Paint}) => (
                        <div className="message-item" key={_id}>
                            <div className='building_img'>
                                {img?.map((img,index) => (
                                    <img src={img} alt="building" key={index}/>
                                ))}
                            </div>
                            <span className="address">{address}</span>
                            <span className="sqft">{sqft}</span>
                            <span className="startDate">{startDate}</span>
                            <span className="completionDate">{completionDate}</span>
                            <span className="type_Of_Paint">{type_Of_Paint}</span>
                            <span className="painting_service">{painting_service}</span>
                            <span className="paint_provider">{paint_provider}</span>
                            <span className="consultation">{consultation}</span>
                            <span className="repairs_needed">{repairs_needed}</span>
                            <span className="budget">{budget}</span>
                            <span className="special_request">{special_request}</span>
                            <span className="customer_name">{customer_name}</span>
                            <span className="customer_email">{customer_email}</span>
                            <span className="customer_number">{customer_number}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Messages;