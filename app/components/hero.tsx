'use-client'
import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const HeroElement = () => {
  return (
        <div className="hero bg-black min-h-96">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold"><span className="text-blue-500">Crypto</span> App</h1>
                <p className="py-6">
                Your gateway to smarter crypto investments. The insights you need to navigate the crypto market confidently.
                </p>
                <button className="btn btn-success"><SignInButton>Sign In to Continue</SignInButton></button>
            </div>
            </div>
        </div>
  )
}

export default HeroElement
