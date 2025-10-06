"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from "axios";
import { useRouter } from 'next/navigation';


interface signupdata {
    FullName: string,
    email: string,
    phoneNumber: string,
    Address: string,
    password: string,
}

const SignupPage = () => {

    const [data, setdata] = useState<signupdata | null>({
        FullName: "",
        email: "",
        phoneNumber: "",
        Address: "",
        password: ""
    });

    const [loading, setloading] = useState<boolean>(false);

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setdata((prevData) => ({
            ...prevData!,
            [name]: value
        }))
    }

    const router = useRouter();

    const onhandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setloading(true);
        try {
            const response = await axios.post("/api/user/signup", data);
            if (response.status === 200) {
                console.log(response.data);
                console.log("successfully signed up..");
                toast.success("Account created successfully");
                router.push("/user/auth/login");
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
        <div className="w-screen h-screen  text-black flex justify-center items-center ">
            {/* Glassmorphism Card */}
            <div className="w-full max-w-md bg-black/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-4">
                {/* Logo/Title */}
                <div className="text-start w-full p-2 mb-6">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-600 text-transparent bg-clip-text">
                        Green Bites
                    </h1>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-white">Create Your Account</h2>
                    <p className="text-sm text-white/80">Please enter your Data.</p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={onhandleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/90 block">FullName</label>
                        <input
                            type="text"
                            name='FullName'
                            value={data!.FullName || ""}
                            onChange={onchange}
                            placeholder="Enter your Full Name"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />


                        <label className="text-sm font-medium text-white/90 block">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={data!.email || ""}
                            onChange={onchange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />

                        <label className="text-sm font-medium text-white/90 block">Ph no.</label>
                        <input
                            type="text"
                            name='phoneNumber'
                            value={data?.phoneNumber || ""}
                            onChange={onchange}
                            placeholder="Enter your phone number (+91)"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />
                        <label className="text-sm font-medium text-white/90 block">Address</label>
                        <input
                            type="text"
                            name='Address'
                            value={data?.Address || ""}
                            onChange={onchange}
                            placeholder="Enter your Address"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />


                        <label className="text-sm font-medium text-white/90 block">Password</label>
                        <input
                            type="password"
                            name='password'
                            value={data?.password || ""}
                            onChange={onchange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-lg font-medium transition-all"
                    >
                        {loading ? "loading..." : "Signup"}
                    </Button>
                </form>

                {/* Signup Link */}
                <div className="mt-6 text-center text-sm text-white/80">
                    Already have an account?{' '}
                    <Link
                        href="/user/auth/login"
                        className="font-medium text-green-300 hover:text-green-200 transition-colors"
                    >
                        login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
