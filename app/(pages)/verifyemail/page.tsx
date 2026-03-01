"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  // Extract token from URL
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    if (urlToken) {
      setToken(urlToken);
      // ==== OR ==== Production level use in Next.js =====
      // const { query } = router;
      // // const URLToken = query.token;
    }
  }, []);

  // Call API only when token exists
  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        await axios.post("/api/users/verifyemail", { token });
        setVerified(true);
      } catch (err: any) {
        setError(true);
        console.log("Verification error:", err?.response?.data || err.message);
      }
    };

    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Verify Email</h1>

      <h2 className="p-2 bg-orange-500 text-black mt-4">
        {token ? token : "No Token Found"}
      </h2>

      {verified && (
        <div className="mt-6">
          <h2 className="text-green-600 text-xl">Email Verified ✅</h2>
          <Link href="/login" className="text-blue-600 underline">
            Go to Login
          </Link>
        </div>
      )}

      {error && (
        <h2 className="text-red-600 text-xl mt-6">Verification Failed ❌</h2>
      )}
    </section>
  );
};

export default VerifyEmail;
