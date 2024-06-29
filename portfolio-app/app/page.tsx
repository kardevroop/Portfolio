import Approach from "@components/Approach";
import Bio from "@components/Bio";
import Clients from "@components/Clients";
import Education from "@components/Education";
import Experience from "@components/Experience";
import Footer from "@components/Footer";
import Grid from "@components/Grid";
import Hero from "@components/Hero";
import Publications from "@components/Publications";
import RecentProjects from "@components/RecentProjects";
import { FloatingNav } from "@components/ui/FloatingNavbar";
import { navItems } from "@data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
     items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Bio/>
        <Grid/>
        <Education/>
        <Experience/>
        <RecentProjects/>
        {/* <Clients/> */}
        <Publications/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
