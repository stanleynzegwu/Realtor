import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";

import "./ReviewList.scss";
import { useReviewContext } from "../../../Hooks/useReviewContext";
import { useDeleteReview } from "../../../Hooks/useApiRequest";
import { useUpdateReview } from "../../../Hooks/useApiRequest";
import { TypingText, Loader, PopUpDeleteAction } from "../../../components";
import { ScrollToTop, UseToggleVisibility, UseId } from "../../../Hooks/customHook";
import { FadeDownAnimation, FadeUpAnimation } from "../../../components/UI/Animation/Animation";

const ReviewList = () => {
  ScrollToTop();
  const { reviews } = useReviewContext();
  const { DeleteAReview } = useDeleteReview();
  const { UpdateReview, success, isLoading } = useUpdateReview();
  const allReviews = reviews?.data;
  const [toggle, setToggle] = useState(false);
  const [idd, setIdd] = useState(null);

  //to pass as prop to PopUpDeleteAction
  const { toggle1, setToggle1 } = UseToggleVisibility();
  const { id, setId } = UseId();

  const handleUpdateState = (id) => {
    setIdd(id);
    setToggle(true);
  };
  const currentReview = allReviews?.find((review) => review._id === idd);
  const [radio, setRadio] = useState(null);
  const [formReview, setFormReview] = useState("");
  useEffect(() => {
    currentReview && setFormReview(currentReview?.review);
    currentReview && setRadio(currentReview?.isFavorite ? "True" : "False");
  }, [idd, currentReview]);

  async function handleUpdate(e) {
    e.preventDefault();
    const form = { review: formReview, isFavorite: radio === "False" ? false : true };
    await UpdateReview(idd, form);
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
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
    { field: "useremail", headerName: "Email", width: 200 },
    { field: "star", headerName: "Star", width: 50 },
    { field: "review", headerName: "Review", type: "string", width: 350 },
    { field: "isFavorite", headerName: "isFavorite", type: "boolean", width: 90 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit" onClick={() => handleUpdateState(params.row._id)}>
              Edit
            </button>
            <MdDeleteOutline
              className="userListDelete"
              onClick={() => {
                setId(params.row._id);
                setToggle1(true);
              }}
            />
          </>
        );
      },
    },
  ];

  return allReviews ? (
    <FadeUpAnimation className={toggle ? `reviewList hideOverflow` : `reviewList`}>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={allReviews}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
        />
      </div>
      {toggle1 && (
        <PopUpDeleteAction
          value="Review"
          width=""
          action={DeleteAReview}
          id={id}
          setToggle={setToggle1}
        />
      )}

      {toggle && (
        <div className="reviewEdit">
          <div className="reviewEdit__holder">
            <FadeDownAnimation className="reviewEdit__topHolder">
              <p>EDIT REVIEW</p>
              <span className="close-icon" onClick={() => setToggle(false)}>
                <AiOutlineClose />
              </span>
            </FadeDownAnimation>
            <div className="reviewEdit__starHolder">
              <span>{Array(currentReview?.star).fill(<AiFillStar />)}</span>
            </div>
            <form>
              <FadeUpAnimation className="reviewEdit__textarea">
                <textarea
                  name="review"
                  id=""
                  cols="30"
                  rows="8"
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                />
              </FadeUpAnimation>
              <FadeUpAnimation className="reviewUpdateItem">
                <label className="radio-label">isFavorite</label>
                <div className="radioHolder">
                  <span>
                    <label htmlFor="true" className="radio-boolean">
                      True
                    </label>
                    <input
                      type="radio"
                      value="True"
                      id="true"
                      checked={radio === "True"}
                      onChange={(e) => setRadio(e.target.value)}
                      className="radioInput"
                    />
                  </span>
                  <span>
                    <label htmlFor="false" className="radio-boolean">
                      False
                    </label>
                    <input
                      type="radio"
                      value="False"
                      id="false"
                      checked={radio === "False"}
                      onChange={(e) => setRadio(e.target.value)}
                      className="radioInput"
                    />
                  </span>
                </div>
              </FadeUpAnimation>
              <button
                disabled={isLoading}
                type="submit"
                className="reviewUpdateButton"
                onClick={handleUpdate}
              >
                {isLoading ? "Updating..." : "UPDATE"}
              </button>
              {success && (
                <TypingText
                  text="Review Updated Successfully"
                  intervalDuration={50}
                  className="reviewSuccess"
                />
              )}
            </form>
          </div>
        </div>
      )}
    </FadeUpAnimation>
  ) : (
    <Loader className="loading" />
  );
};

export default ReviewList;
