'use-client'
import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <div className="navbar bg-black">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Crypto App</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li>
        <details>
          <summary>More 👇</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li><SignedOut><SignInButton /></SignedOut></li>
      <li><SignedIn><UserButton /></SignedIn></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar
