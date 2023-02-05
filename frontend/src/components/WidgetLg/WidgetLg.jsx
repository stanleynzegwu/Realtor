import './WidgetLg.scss'

const WidgetLg = () => {
    return ( 
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Latest Transactions</h3>
            <div>
                <div>
                    <h4>Customer Support Messages</h4>
                </div>
                <div>
                    <h4>Sell Property/Lands Request Messages</h4>
                </div>
                <div>
                    <h4>Buy Property/Lands Request Messages</h4>
                </div>
                <div>
                    <h4>Hire Painter Request Messages</h4>
                </div>
            </div>
        </div>
     );
}
 
export default WidgetLg;