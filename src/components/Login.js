import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "prologin@prologin.com" && password === "ProLogin123456") {
      sessionStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h1>ProLogin</h1>
      <div
        className="container p-5"
        style={{ backgroundColor: "#32343B", borderRadius: "15px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                pattern="(?=.*\d)(?=.*[a-zA-Z]).{6,}"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i
                    className="fas fa-eye-slash"
                    style={{ color: "white" }}
                  ></i>
                ) : (
                  <i className="fas fa-eye" style={{ color: "white" }}></i>
                )}
              </button>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="text-end">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
