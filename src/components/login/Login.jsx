import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // محاكاة تسجيل دخول ناجح
    alert("Login successful!");
    navigate("/"); 
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center" 
         style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      
      <div className="card shadow-lg border-0" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
        <div className="card-body p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Welcome Back</h2>
            <p className="text-muted">Please enter your details</p>
          </div>

          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg shadow-sm"
                placeholder="name@example.com"
                style={{ borderRadius: "10px", fontSize: "0.9rem" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <label className="form-label fw-semibold">Password</label>
                <small><Link to="/forgot-password" style={{ textDecoration: "none" }}>Forgot?</Link></small>
              </div>
              <input
                type="password"
                className="form-control form-control-lg shadow-sm"
                placeholder="••••••••"
                style={{ borderRadius: "10px", fontSize: "0.9rem" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me */}
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label text-muted" htmlFor="rememberMe" style={{ fontSize: "0.85rem" }}>
                Remember me for 30 days
              </label>
            </div>

            {/* Login Button */}
            <button 
              className="btn btn-primary btn-lg w-100 shadow-sm" 
              type="submit"
              style={{ borderRadius: "10px", fontWeight: "600", transition: "0.3s" }}
            >
              Sign In
            </button>

            {/* Register Link */}
            <div className="text-center mt-4">
              <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                Don't have an account? <Link to="/register" className="fw-bold text-decoration-none">Create one</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;