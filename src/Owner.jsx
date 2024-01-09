import React from "react";
import Layout from "./Layout";

const Owner = () => {
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-200 dark:bg-slate-700">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl py-6 font-bold">Mob - Group 8 - 30</h1>
            <img src="./asset/avatar.jpg" alt="profile-picture" />
            <p className="py-6 font-semibold">Short Biography:</p>
            <p className="text-justify">
              As a former project manager — now on my way to becoming a web and
              software developer — with four years of experience managing
              diverse types of projects for clients from various industries, I
              combined my newly acquired knowledge with experiences in managing
              problems with a systematic mindset, an eye on small details and a
              touch of creativity.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Owner;
