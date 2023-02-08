import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './PropertyList.scss'
import { usePropertyContext } from '../../../Hooks/usePropertyContext';
import { useDeleteProperty } from '../../../Hooks/useApiRequest';
import { Loader } from '../../../components';
import { ScrollToTop } from '../../../Hooks/customHook';

const PropertyList = () => {
    ScrollToTop()
    const { DeleteAProperty } = useDeleteProperty()
    const { properties } = usePropertyContext()
    const allProperties = properties?.data

    const columns = [
        { field: '_id', headerName: 'ID', width: 40 },
        { field: 'propertyType', headerName: 'PropertyType', width: 150 ,renderCell: (params) => {
            return (
                <div className='propertyListProperty'>
                    <img className='propertyListImg' src={params.row.img} alt='avatar'/>
                    {params.row.propertyType}
                </div>
            )
        }},
        { field: 'category', headerName: 'Category', width: 100 },
        { field: 'location', headerName: 'Location', width: 100 },
        { field: 'state', headerName: 'State', width: 100 },
        { field: 'desc', headerName: 'Description', width: 100 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'consultancyFee', headerName: 'ConsultancyFee', width: 100 },
        {
          field: 'isFeatured',
          headerName: 'IsFeatured',
          type: 'boolean',
          width: 90,
        },
        {
            field:'action',
            headerName:'Action',
            width:100,
            renderCell: (params) => {
                return (
                    <> 
                        <Link to={`/adminDashboard/property/${params.row._id}`}>
                            <button className='propertyListEdit'>Edit</button>
                        </Link>
                        <MdDeleteOutline className='propertyListDelete' onClick={() => DeleteAProperty(params.row._id)}/>
                    </>
                )
            }
        }
      ];

    return ( 
        properties
        ?
        <div className="propertyList">
            <div style={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={allProperties}
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
 
export default PropertyList;