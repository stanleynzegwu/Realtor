import './SelectedMessageDisplay.scss'
import { formatPrice } from '../../utilityFunctions';

const SelectedMessageDisplay = ({data}) => {
    data = data && data[0]

    return (
        <div className='selectedMessage'>
            {data?.message && <div className="item_value">
                <span className='label'>message</span>
                <span className="itemValue">{data.message}</span>
            </div>
            }
            {data?.property_id && <div className="item_value">
                <span className='label'>property id</span>
                <span className="itemValue">{data.property_id}</span>
            </div>
            }
            {data?.property_type && <div className="item_value">
                <span className='label'>property type</span>
                <span className="itemValue">{data.property_type}</span>
            </div>
            }          
            {data?.phoneNumber && <div className="item_value">
                <span className='label'>phone number</span>
                <span className="itemValue">{data.phoneNumber}</span>
            </div>
            }
            {data?.location && <div className="item_value">
                <span className='label'>location</span>
                <span className="itemValue">{data.location}</span>
            </div>
            }
            {data?.sqft && <div className="item_value">
                <span className='label'>Square footage</span>
                <span className="itemValue">{data.sqft}</span>
            </div>
            }
            {data?.yearBuilt && <div className="item_value">
                <span className='label'>year built</span>
                <span className="itemValue">{data.yearBuilt}</span>
            </div>
            }
            {data?.plotSize && <div className="item_value">
                <span className='label'>plotSize</span>
                <span className="itemValue">{data.plotSize}</span>
            </div>
            }
            {data?.condition && <div className="item_value">
                <span className='label'>condition</span>
                <span className="itemValue">{data.condition}</span>
            </div>
            }
            {data?.features && <div className="item_value">
                <span className='label'>features</span>
                <span className="itemValue">{data.features}</span>
            </div>
            }
            {data?.zoning && <div className="item_value">
                <span className='label'>zoning</span>
                <span className="itemValue">{data.zoning}</span>
            </div>
            }
            {data?.topography && <div className="item_value">
                <span className='label'>topography</span>
                <span className="itemValue">{data.topography}</span>
            </div>
            }
            {data?.soil_type && <div className="item_value">
                <span className='label'>soil type</span>
                <span className="itemValue">{data.soil_type}</span>
            </div>
            }
            {data?.description && <div className="item_value">
                <span className='label'>description</span>
                <span className="itemValue">{data.description}</span>
            </div>
            }
            {data?.asking_price && <div className="item_value">
                <span className='label'>asking price</span>
                <span className="itemValue">{`N${formatPrice(data.asking_price)}`}</span>
            </div>
            }
            {data?.documents && <div className="item_value">
                <span className='label'>documents</span>
                <span className="itemValue">{data.documents}</span>
            </div>
            }
            {data?.additional_info && <div className="item_value">
                <span className='label'>additional info</span>
                <span className="itemValue">{data.additional_info}</span>
            </div>
            }
            {data?.address && <div className="item_value">
                <span className='label'>address</span>
                <span className="itemValue">{data.address}</span>
            </div>
            }
            {data?.startDate && <div className="item_value">
                <span className='label'>start date</span>
                <span className="itemValue">{data.startDate}</span>
            </div>
            }
            {data?.completionDate && <div className="item_value">
                <span className='label'>completion date</span>
                <span className="itemValue">{data.completionDate}</span>
            </div>
            }
            {data?.type_Of_Paint && <div className="item_value">
                <span className='label'>type Of Paint</span>
                <span className="itemValue">{data.type_Of_Paint}</span>
            </div>
            }
            {data?.painting_service && <div className="item_value">
                <span className='label'>painting service</span>
                <span className="itemValue">{data.painting_service}</span>
            </div>
            }
            {data?.paint_provider && <div className="item_value">
                <span className='label'>paint provider</span>
                <span className="itemValue">{data.paint_provider}</span>
            </div>
            }
            {data?.consultation && <div className="item_value">
                <span className='label'>consultation</span>
                <span className="itemValue">{data.consultation}</span>
            </div>
            }
            {data?.repairs_needed && <div className="item_value">
                <span className='label'>repairs needed</span>
                <span className="itemValue">{data.repairs_needed}</span>
            </div>
            }
            {data?.budget && <div className="item_value">
                <span className='label'>budget</span>
                <span className="itemValue">{`N${formatPrice(data.budget)}`}</span>
            </div>
            }
            {data?.special_request && <div className="item_value">
                <span className='label'>special request</span>
                <span className="itemValue">{data.special_request}</span>
            </div>
            }
        </div>
     );
}
 
export default SelectedMessageDisplay;