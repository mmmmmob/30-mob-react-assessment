import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">Generation Thailand</h1>
            <h1 className="text-5xl my-3">React Assessment</h1>
          </div>
          <div className="my-6 flex w-full justify-evenly">
            <button className="btn btn-accent">Use Home Sector</button>
            <button className="btn btn-warning">Admin Home Sector</button>
          </div>
          {/* <Users /> */}
          <Admin />
        </div>
      </Layout>
    </>
  );
}

function Users() {
  return (
    <div className="overflow-x-auto my-4">
      <table className="table">
        <thead className="text-lg">
          <td>Name</td>
          <td>Lastname</td>
          <td>Position</td>
        </thead>
        <tbody>{/* td with .map here */}</tbody>
      </table>
    </div>
  );
}

function Admin() {
  return (
    <div>
      <h1 className="text-xl font-semibold my-4">Create user here</h1>
      <div className="flex flex-col justify-center items-center ">
        <div className="my-4">
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Position" />
            <button>Submit</button>
          </form>
        </div>
        <div className="overflow-x-auto my-4">
          <table className="table">
            <thead className="text-lg">
              <td>Name</td>
              <td>Lastname</td>
              <td>Position</td>
              <td>Action</td>
            </thead>
            <tbody className="text-lg">
              {/* td with .map here */}
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>
                <button>DELETE</button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
