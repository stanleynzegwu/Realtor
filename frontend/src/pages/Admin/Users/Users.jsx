import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Users.scss";
import { useUserContext } from "../../../Hooks/useUserContext";
import { useDeleteUser } from "../../../Hooks/useApiRequest";
import { Loader, PopUpDeleteAction } from "../../../components";
import { ScrollToTop, UseToggleVisibility, UseId } from "../../../Hooks/customHook";

const Users = () => {
  ScrollToTop();
  const { users } = useUserContext();
  const { DeleteAUser } = useDeleteUser();
  const { toggle, setToggle } = UseToggleVisibility();
  const { id, setId } = UseId();
  const allUsers = users?.data;

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.img
                  ? params.row.img
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              }
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "IsAdmin",
      type: "boolean",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/adminDashboard/user/${params.row._id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <MdDeleteOutline
              className="userListDelete"
              onClick={() => {
                setId(params.row._id);
                setToggle(true);
              }}
            />
          </>
        );
      },
    },
  ];

  return users ? (
    <div className="users">
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={allUsers}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
        />
      </div>
      {toggle && (
        <PopUpDeleteAction
          value="user"
          width=""
          action={DeleteAUser}
          id={id}
          setToggle={setToggle}
        />
      )}
    </div>
  ) : (
    <Loader className="loading" />
  );
};

export default Users;
