'use client'
import Biography from "./components/Home/Biography";
import LatestProjects from "./components/Home/LatestProjects";
import ProjectCard from "./components/ProjectCard";

export default function Home() {

  return (
    <div className="flex-1 h-screen overflow-scroll">

      <Biography />

      <LatestProjects />
    </div>
  );
}
