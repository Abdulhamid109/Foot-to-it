import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const SignupPage = () => {
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
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/90 block">FullName</label>
                        <input
                            type="text"
                            placeholder="Enter your Full Name"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />


                        <label className="text-sm font-medium text-white/90 block">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />

                        <label className="text-sm font-medium text-white/90 block">Ph no.</label>
                        <input
                            type="number"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />
                        <label className="text-sm font-medium text-white/90 block">Address</label>
                        <input
                            type="text"
                            placeholder="Enter your Address"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />


                        <label className="text-sm font-medium text-white/90 block">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white placeholder-white/60"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-lg font-medium transition-all"
                    >
                        Signup
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
