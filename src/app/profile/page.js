"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div data-aos="fade-up">
        <div className="flex justify-center items-center h-screen flex-col">
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure className="py-10">
              <h2 className="text-center">Users Data</h2>
            </figure>
            <div className="card-body">
              {userData ? (
                <ul>
                  {userData.data.map((user) => (
                    <li key={user.id}>
                      <Link href={`/api/users/${user.id}`}>
                        {user.nickname}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
