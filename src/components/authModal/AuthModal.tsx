import "./AuthModal.scss";
import { useState } from "react";
import { X, Smartphone, Mail } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({
  isOpen,
  onClose
}: Props) => {

  const [isLogin, setIsLogin] =
    useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">

      <div className="auth-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X />
        </button>

        <div className="auth-header">

          <h2>
            {isLogin
              ? "Welcome Back"
              : "Create Account"}
          </h2>

          <p>
            Silk & Shine
          </p>

        </div>

        <div className="auth-tabs">

          <button
            className={
              isLogin ? "active" : ""
            }
            onClick={() =>
              setIsLogin(true)
            }
          >
            Login
          </button>

          <button
            className={
              !isLogin ? "active" : ""
            }
            onClick={() =>
              setIsLogin(false)
            }
          >
            Register
          </button>

        </div>

        <div className="auth-form">

          <div className="input-group">
            <Smartphone size={18} />

            <input
              type="text"
              placeholder="Mobile Number"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              maxLength={4}
              placeholder="4 Digit PIN"
            />
          </div>

          {!isLogin && (
            <>
              <div className="input-group">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="Email (Optional)"
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password (Optional)"
                />
              </div>
            </>
          )}

          <button className="submit-btn">

            {isLogin
              ? "Login"
              : "Create Account"}

          </button>

          <button className="guest-btn">
            Continue as Guest
          </button>

          {isLogin && (
            <p className="forgot">
              Forgot PIN?
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default AuthModal;