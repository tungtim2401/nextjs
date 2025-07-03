"use client";

import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import { SkILLS } from "./constant";
import { Card } from "antd";

const OverviewProfile = () => {
  return (
    <div className="flex font-sans text-gray-800 h-screen overflow-hidden">
      <div className="w-[300px] h-full">
        <Header />
      </div>
      <div className="flex-1 h-full overflow-y-auto p-2">
        <Intro />

        <section className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <div className="flex gap-4 flex-wrap">
              {SkILLS.map((skill) => (
                <Card key={skill.category} className="mb-6 w-[280px]">
                  <h3 className="text-xl font-semibold mb-2">
                    {skill.category}
                  </h3>
                  <ul className="list-disc pl-5">
                    {skill.items.map((item) => (
                      <li key={item} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Tùng Phạm. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default OverviewProfile;
