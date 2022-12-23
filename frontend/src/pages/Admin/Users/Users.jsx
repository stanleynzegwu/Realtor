import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Users.scss'
import {userRows} from '../../../dummyData'
import { useState } from 'react'

const Users = () => {
    const [data,setData] = useState(userRows)
    function handleDelete(id){
        let filtered = data.filter(user => user.id !== id)
        setData(filtered)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200 ,renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt='avatar'/>
                    {params.row.user}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 250 },
        {
          field: 'isAdmin',
          headerName: 'IsAdmin',
          type: 'boolean',
          width: 90,
        },
        {
            field:'action',
            headerName:'Action',
            width:150,
            renderCell: (params) => {
                return (
                    <> 
                        <Link to={`/adminDashboard/user/${params.row.id}`}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <MdDeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    return ( 
        <div className="users">
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
 
export default Users;