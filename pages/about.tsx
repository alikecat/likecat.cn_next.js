import "/app/globals.css";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "../components/SideBar";

export default function About() {
  return (
    <div>
      <NavBar />
      <main className="container m-auto px-4 py-24 flex min-h-screen">
        <SideBar />
        <div></div>
      </main>
    </div>
  );
}
