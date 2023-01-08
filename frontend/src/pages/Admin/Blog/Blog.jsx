import { Link } from 'react-router-dom'
import './Blog.scss'

// const Blog = () => {
//     return ( 
//         <div className="admin_blog">
//             <p>blog</p>
//         </div>
//      );
// }
 
// export default Blog;

import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md'
// import { useUserContext } from '../../../Hooks/useUserContext';
// import { useDeleteUser } from '../../../Hooks/useApiRequest';
import { userRows } from '../../../dummyData';
import { Loader } from '../../../components';

const Blog = () => {

    const columns = [
        { field: '_id', headerName: 'ID', width: 50 },
        { field: 'img', headerName: 'img', width: 150 ,renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' 
                        src={params.row.img 
                        ? 
                        params.row.img 
                        : 
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                        } 
                        alt='avatar'
                    />
                </div>
            )
        }},
        { field: 'text', headerName: 'Text', width: 600 },
        {
            field:'action',
            headerName:'Action',
            width:150,
            renderCell: (params) => {
                return (
                    <> 
                        <Link to={`/adminDashboard/user/${params.row._id}`}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <MdDeleteOutline className='userListDelete'/>
                    </>
                )
            }
        }
      ];

    return ( 
        userRows
        ?
        <div className="admin_blog">
            <div  className='admin_blogBtn'>
                <Link to='/adminDashboard/newBlog'>
                    <button>Create</button>
                </Link>
            </div>
            <div style={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={userRows}
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
 
export default Blog;