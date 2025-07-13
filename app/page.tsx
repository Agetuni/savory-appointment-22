"use client";
import React from "react";
import { Header } from "./components/header";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">Bravo</h1>
      </div>
    </main>
  );
}
