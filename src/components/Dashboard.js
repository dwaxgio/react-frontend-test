import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleShowModal = (comment) => {
    setSelectedComment(comment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedComment(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="container position-relative p-4">
      <div className="text-center">
        <h1>ProDashboard</h1>
      </div>

      <button
        className="btn btn-danger position-absolute"
        style={{ top: 20, right: 20 }}
        onClick={handleLogout}
      >
        Logout
      </button>

      <div style={{ maxHeight: "800px", overflowY: "scroll", padding: "15px" }}>
        {comments.map((comment) => (
          <div key={comment.id} className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="text-center flex-grow-1">
                <span className="card-text mx-2">{comment.id}</span>
                <srong>|</srong>
                <span className="card-text mx-2">{comment.name}</span>
                <srong>|</srong>
                <span className="card-text mx-2">{comment.email}</span>
              </div>

              <button
                className="btn btn-primary fas fa-eye"
                onClick={() => handleShowModal(comment)}
              ></button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn btn-secondary ms-auto"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
              <div className="modal-body text-dark">
                {selectedComment && (
                  <>
                    <p>
                      <strong>ID:</strong> {selectedComment.id}
                    </p>
                    <p>
                      <strong>Name:</strong> {selectedComment.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedComment.email}
                    </p>
                    <p>
                      <strong>Body:</strong> {selectedComment.body}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
