"use client";
import { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { LoginForm } from "@/components/templates/auth/LoginForm";
import { RegisterForm } from "@/components/templates/auth/RegisterForm";
import { OtpLoginForm } from "@/components/templates/auth/OtpLoginForm";
import { ForgotForm } from "@/components/templates/auth/ForgotForm";

type formStatusType = "LOGIN" | "REGISTER" | "LOGIN_NUMBER" | "FORGOT-PASSWORD";

import Link from "next/link";

const LoginOrRegister = () => {
  const [formStatus, setFormStatus] = useState<formStatusType>("LOGIN");

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center mx-auto bg-gray-50">
      {/* wrapper */}
      <div className="w-[90%] md:w-112.5 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        {/* Tabs => Login / Register */}
        {formStatus === "FORGOT-PASSWORD" ? null : (
          <div className="flex w-full opacity-75 mb-10">
            {/* Login Tab*/}
            <div
              className="w-1/2 flex items-center flex-col gap-1 relative pb-2 cursor-pointer group"
              onClick={() => setFormStatus("LOGIN")}
            >
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-100"></span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D1B378] transition-transform duration-300 origin-center w-full
                ${formStatus === "LOGIN" || formStatus === "LOGIN_NUMBER" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"}
              `}
              ></span>

              <div className="flex items-center gap-2 py-2 px-6">
                <p
                  className={`text-base font-black transition-colors ${formStatus === "LOGIN" ? "text-[#D1B378]" : "text-black opacity-75"}`}
                >
                  ورود
                </p>
                <HiOutlineLogin
                  size={20}
                  className={
                    formStatus === "LOGIN"
                      ? "text-[#D1B378]"
                      : "text-black opacity-75"
                  }
                />
              </div>
            </div>

            {/* Register Tab*/}
            <div
              className="w-1/2 flex items-center flex-col gap-1 relative pb-2 cursor-pointer group"
              onClick={() => setFormStatus("REGISTER")}
            >
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-100"></span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#D1B378] transition-transform duration-300 origin-center w-full
                ${formStatus === "REGISTER" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"}
              `}
              ></span>

              <div className="flex items-center gap-2 py-2 px-6">
                <p
                  className={`text-base font-black transition-colors ${formStatus === "REGISTER" ? "text-[#D1B378]" : "text-black opacity-75"}`}
                >
                  ثبت نام
                </p>
                <BsFillPersonPlusFill
                  size={20}
                  className={
                    formStatus === "REGISTER"
                      ? "text-[#D1B378]"
                      : "text-black opacity-75"
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Components */}
        {formStatus === "FORGOT-PASSWORD" && <ForgotForm />}

        {formStatus === "LOGIN" && <LoginForm setFormStatus={setFormStatus} />}

        {formStatus === "REGISTER" && <RegisterForm />}

        {formStatus === "LOGIN_NUMBER" && (
          <OtpLoginForm setFormStatus={setFormStatus} />
        )}
      </div>
    </div>
  );
};

export default LoginOrRegister;
