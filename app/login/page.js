"use client";
import React, { use, useState } from "react";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const secret = "1122Pakistan@!!!!!";
    setTimeout(() => {
      if (passcode === secret) {
        router.push("/admin");
        setError("");
      } else {
        setError("Invalid password.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Main login card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/90 border border-gray-200 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Enter your password to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div className="space-y-6">
              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-blue-100 border border-blue-600 rounded-xl p-3 animate-in slide-in-from-top duration-300">
                  <p className="text-blue-800 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading || !passcode.trim()}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 text-white font-semibold rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-200 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </div>
          </form>
          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Secured with end-to-end encryption
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-60 animate-bounce delay-200"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-60 animate-bounce delay-700"></div>
      </div>
    </div>
  );
}
