import "./Offers.scss"
import { useOfferContext } from '../../Hooks/useOfferContext'

const Offers = () => {
    const { offers} = useOfferContext()
    console.log(offers)

    return (
        <div className="offers">
            {offers?.map((offer,index) => (
                <div className="offer_holder" key={index}>
                    <h2>{offer.title}</h2>
                    <p className="offers_validity">offer is valid from {offer.startDate} to {offer.endDate}</p>
                </div>
            ))}
        </div>
    )
}
 
export default Offers;