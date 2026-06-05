import "./AuthModal.scss";
import { useState } from "react";
import { X, Smartphone, Mail, User } from "lucide-react";
import {
  loginUser,
  registerUser
} from "../../services/authService";

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

  const [fullName, setFullName] =
    useState("");

  const [mobile, setMobile] =
    useState("");

  const [pin, setPin] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  if (!isOpen) return null;

  const handleLogin = async () => {

    try {

      setLoading(true);

      const response =
        await loginUser({
          mobile,
          pin
        });

        localStorage.setItem(
          "token",
          response.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.user
          )
        );

      alert(
        `Welcome ${response.fullName}`
      );

      onClose();

      window.location.reload();

    } catch (error: any) {

      alert(
        error.response?.data ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  const handleRegister = async () => {

    try {

      setLoading(true);

      await registerUser({
        fullName,
        mobile,
        pin,
        email,
        password
      });

      alert(
        "Registration Successful"
      );

      setIsLogin(true);

      setFullName("");
      setMobile("");
      setPin("");
      setEmail("");
      setPassword("");

    } catch (error: any) {

      alert(
        error.response?.data ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };

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

          <p>Silk & Shine</p>

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

          {!isLogin && (

            <div className="input-group">

              <User size={18} />

              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) =>
                  setFullName(
                    e.target.value
                  )
                }
              />

            </div>

          )}

          <div className="input-group">

            <Smartphone size={18} />

            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) =>
                setMobile(
                  e.target.value
                )
              }
            />

          </div>

          <div className="input-group">

            <input
              type="password"
              maxLength={4}
              placeholder="4 Digit PIN"
              value={pin}
              onChange={(e) =>
                setPin(
                  e.target.value
                )
              }
            />

          </div>

          {!isLogin && (
            <>
              <div className="input-group">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Email (Optional)"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="input-group">

                <input
                  type="password"
                  placeholder="Password (Optional)"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

              </div>
            </>
          )}

          <button
            className="submit-btn"
            disabled={loading}
            onClick={
              isLogin
                ? handleLogin
                : handleRegister
            }
          >

            {
              loading
                ? "Please Wait..."
                : (
                  isLogin
                    ? "Login"
                    : "Create Account"
                )
            }

          </button>

          <button
            className="guest-btn"
            onClick={onClose}
          >
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