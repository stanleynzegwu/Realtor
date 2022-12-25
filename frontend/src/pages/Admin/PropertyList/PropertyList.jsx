import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {propertyRows} from '../../../dummyData'
import { useState } from 'react'
import './PropertyList.scss'

const PropertyList = () => {
    const [data,setData] = useState(propertyRows)
    function handleDelete(id){
        let filtered = data.filter(property => property.id !== id)
        setData(filtered)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'type', headerName: 'PropertyType', width: 150 ,renderCell: (params) => {
            return (
                <div className='propertyListProperty'>
                    <img className='propertyListImg' src={params.row.img} alt='avatar'/>
                    {params.row.type}
                </div>
            )
        }},
        { field: 'category', headerName: 'Category', width: 100 },
        { field: 'location', headerName: 'Location', width: 100 },
        { field: 'state', headerName: 'State', width: 100 },
        { field: 'description', headerName: 'Description', width: 100 },
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
                        <Link to={`/adminDashboard/property/${params.row.id}`}>
                            <button className='propertyListEdit'>Edit</button>
                        </Link>
                        <MdDeleteOutline className='propertyListDelete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    return ( 
        <div className="propertyList">
            <div style={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
                checkboxSelection
              />
            </div>
        </div>
     );
}
 
export default PropertyList;