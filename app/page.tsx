import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { auth, currentUser } from '@clerk/nextjs/server'
import NavBar from "./components/NavBar";
import HeroElement from "./components/hero";
import StatsElement from "./components/StatsElement";
import { AreaChartHero } from "./components/ChartElem";

export default function Home() {
  const { userId } = auth()
  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
    return ( 
      <h1>Hello</h1>
    );
  }

  else {
    return(
      <main>
         <HeroElement></HeroElement>
         <StatsElement></StatsElement>
         <div className="flex justify-center px-20">
            <AreaChartHero></AreaChartHero>
         </div>

      </main>

          
    );

  };
  };
