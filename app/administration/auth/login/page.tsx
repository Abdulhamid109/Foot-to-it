"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


interface LoginData {
  email: string,
  password: string
}
const LoginPage = () => {
  const [data, setdata] = useState<LoginData | null>({
    email: "",
    password: ""
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setdata((prevData) => ({
      ...prevData!,
      [name]: value
    }))
  }

  const [loading, setloading] = useState<Boolean>(false);

  const router = useRouter();

  const onhandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post("/api/adminstration/login", data);
      if (response.status === 200) {
        console.log(response.data);
        console.log("successfully signed up..");
        toast.success("Account created successfully");
        router.push("/administration/addCompany");
      } else {
        console.log("Something went wrong!!");
        toast.error("Failed to create the account!!");
      }
      setloading(false);



    } catch (error) {
      console.log("Failed to signup!!");
      toast.error("Something went wrong!! try again later.")
    }
  }

  return (
    <div className="w-screen h-screen md:m-15 text-black flex justify-center items-center p-4">
      {/* Glassmorphism Card */}
      <div className="w-full max-w-md bg-black/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-8">
        {/* Logo/Title */}
        <div className="text-start w-full p-2 mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-600 text-transparent bg-clip-text">
            Green Bites -Admin Panel
          </h1>
        </div>

        {/* Welcome Message */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">Welcome Back!</h2>
          <p className="text-sm text-white/80">Please enter your regestered credentials to login.</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={onhandleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/90 block">Email</label>
            <input
              type="email"
              name='email'
              value={data?.email||""}
              onChange={onchange}
              placeholder="Enter your registered email"
              className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/90 block">Password</label>
            <input
              type="password"
              name='password'
              value={data?.password||""}
              onChange={onchange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-lg font-medium transition-all"
          >
            {loading?"loading..":"Login"}
          </Button>
        </form>

        
        
      </div>
    </div>
  );
};

export default LoginPage;
