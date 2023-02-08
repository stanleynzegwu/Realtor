import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from 'react-icons/md'

import './OfferList.scss'
import { useDeleteOffer } from '../../../Hooks/useApiRequest';
import { useOfferContext } from '../../../Hooks/useOfferContext';
import { Loader } from '../../../components';
import { ScrollToTop } from '../../../Hooks/customHook';

const OfferList = () => {
    ScrollToTop()
     const { DeleteOffer } = useDeleteOffer()
     const { offers } = useOfferContext()
 
     const columns = [
         { field: '_id', headerName: 'ID', width: 100 ,renderCell: (params) => {
             return (
                 <div className='allOfferList'>
                     <img className='offerListImg' src={params.row.img} alt='avatar'/>
                     {params.row._id}
                 </div>
             )
         }},
         { field: 'title', headerName: 'Title', width: 200 },
         { field: 'desc', headerName: 'Description', width: 300 },
         { field: 'startDate', headerName: 'Start Date', width: 100 },
         { field: 'endDate', headerName: 'End Date', width: 100 },
         {
             field:'action',
             headerName:'Action',
             width:100,
             renderCell: (params) => {
                 return (
                     <>
                         <MdDeleteOutline className='offerListDelete' onClick={() => DeleteOffer(params.row._id)}/>
                     </>
                 )
             }
         }
       ];
 
     return ( 
        offers
         ?
         <div className="offerList">
             <div  className='offerList__Btn'>
                 <Link to='/adminDashboard/newOffer'>
                     <button>Create</button>
                 </Link>
             </div>
             <div style={{ height: 800, width: '100%' }}>
               <DataGrid
                 rows={offers}
                 disableSelectionOnClick
                 columns={columns}
                 getRowId={row=>row._id}
                 pageSize={20}
                 rowsPerPageOptions={[20]}
                 checkboxSelection
               />
             </div>
         </div>
         :
         <Loader className='loading'/>
      );
}
 
export default OfferList;