"use client";

import { React, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="flex justify-center items-center h-screen">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="py-10">
          <h2 className="text-center">Welcome to CariLawan</h2>
        </figure>
        <div data-aos="fade-right" className="card-body">
          <div className="chat chat-start">
            <div className="chat-bubble">
              <Link href={"/profile"}>Users</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
