import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";

function App() {
  const [employee, setEmployee] = useState([]);
  const [sector, setSector] = useState("");

  const handleSector = (state) => {
    setSector(state);
  };

  useEffect(() => {
    const getEmployeeData = async () => {
      const employeeData = await Axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setEmployee([...employeeData.data]);
    };
    getEmployeeData();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">Generation Thailand</h1>
            <h1 className="text-5xl my-3">React Assessment</h1>
          </div>
          <div className="my-8 flex w-full justify-evenly">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleSector("user");
              }}
            >
              Use Home Sector
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                handleSector("admin");
              }}
            >
              Admin Home Sector
            </button>
          </div>
          <div>
            {sector === "admin" ? (
              <Admin employee={employee} />
            ) : sector === "user" ? (
              <Users employee={employee} />
            ) : (
              <h3 className="font-semibold mt-4">
                Please select the option above
              </h3>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

function Users({ employee }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="table table-zebra">
        <thead className="text-lg">
          <td>Name</td>
          <td>Lastname</td>
          <td>Position</td>
        </thead>
        <tbody>
          {employee.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Admin({ employee }) {
  return (
    <div>
      <h1 className="text-xl font-semibold my-4">Create user here</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4 bt-2 flex justify-center items-center ">
          <form>
            <input
              className=" mr-4 input input-bordered input-primary "
              type="text"
              placeholder="Name"
            />
            <input
              className="mx-3 input input-bordered input-primary "
              type="text"
              placeholder="Lastname"
            />
            <input
              className="mx-3 input input-bordered input-primary "
              type="text"
              placeholder="Position"
            />
            <button className="mx-3 btn btn-success">Submit</button>
          </form>
        </div>
        <div className="overflow-x-auto my-4">
          <table className="table table-zebra">
            <thead className="text-lg">
              <td>Name</td>
              <td>Lastname</td>
              <td>Position</td>
              <td>Action</td>
            </thead>
            <tbody>
              {employee.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.lastname}</td>
                  <td>{member.position}</td>
                  <td>
                    <button className="btn btn-error btn-xs">DELETE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
