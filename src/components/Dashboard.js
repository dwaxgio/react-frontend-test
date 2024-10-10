import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div style={{ maxHeight: "800px", overflowY: "scroll" }}>
        {comments.map((comment) => (
          <div key={comment.id} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{comment.name}</h5>
              <p className="card-text">{comment.body}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleShowModal(comment)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">Comment Details</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span>&times;</span>
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
