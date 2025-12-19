import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ name, email, password });
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-wrapper d-flex align-items-center justify-content-center" 
         style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      
      <div className="card shadow-lg border-0" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
        <div className="card-body p-5">
          {/* Header بنفس ستايل اللوجين */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Create Account</h2>
            <p className="text-muted">Fill in your details to join</p>
          </div>

          <form onSubmit={handleRegister}>
            {/* حقل الاسم */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                placeholder="Enter your name"
                style={{ borderRadius: "10px", fontSize: "0.9rem" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* حقل الإيميل */}
            <div className="mb-3">
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

            {/* حقل كلمة المرور */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
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

            {/* حقل تأكيد كلمة المرور */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control form-control-lg shadow-sm"
                placeholder="••••••••"
                style={{ borderRadius: "10px", fontSize: "0.9rem" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* زر التسجيل بنفس لون اللوجين الأزرق */}
            <button 
              className="btn btn-primary btn-lg w-100 shadow-sm" 
              type="submit"
              style={{ borderRadius: "10px", fontWeight: "600", transition: "0.3s" }}
            >
              Sign Up
            </button>

            {/* رابط العودة للوجين */}
            <div className="text-center mt-4">
              <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;