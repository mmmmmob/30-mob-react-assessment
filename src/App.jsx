import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";

function App() {
  const [employee, setEmployee] = useState([]);
  const [sector, setSector] = useState("admin");

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
          <div className="my-6 flex w-full justify-evenly">
            <button className="btn btn-primary">Use Home Sector</button>
            <button className="btn btn-warning">Admin Home Sector</button>
          </div>
          <Users employee={employee} />
          {/* <Admin /> */}
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

function Admin() {
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
