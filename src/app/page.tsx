"use client"
import NavUnlogggedWeb from "./components/navs/NavUnloggedWeb";
import { useState } from "react";

export default function Home() {
  const [pestanaSelected, setPestanaSelected] = useState("portada")

  
  return (
    <div className="flex flex-col min-h-screen">
      <NavUnlogggedWeb pestanaSelected={pestanaSelected} setPestanaSelected={setPestanaSelected} />
    </div>
  );
}
