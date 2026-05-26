import { useState } from "react";

const applications = [
  {
    id: 1,
    applicant: "John Doe",
    parish: "Makindye",
    amount: "UGX 2,000,000",
    status: "Pending",
  },
  {
    id: 2,
    applicant: "Sarah Namubiru",
    parish: "Nakawa",
    amount: "UGX 5,000,000",
    status: "Approved",
  },
];

export default function Applications() {
  const [search, setSearch] = useState("");

  const filteredApplications = applications.filter((app) =>
    app.applicant.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-green-700 text-white rounded-2xl p-6 shadow-lg mb-6">
        <h1 className="text-3xl font-bold">Applications Dashboard</h1>
        <p className="mt-2 text-green-100">
          Manage parish development funding applications
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total" value="24" />
        <StatCard title="Pending" value="10" />
        <StatCard title="Approved" value="8" />
        <StatCard title="Rejected" value="6" />
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <input
          type="text"
          placeholder="Search applicant..."
          className="w-full p-3 border rounded-xl outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Applications */}
      <div className="grid gap-4">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {app.applicant}
                </h2>
                <p className="text-gray-500">
                  Parish: {app.parish}
                </p>
                <p className="font-medium mt-1">{app.amount}</p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    app.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : app.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {app.status}
                </span>

                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl">
                  View
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center shadow">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Applications Found
            </h2>
            <p className="text-gray-500 mt-2">
              Submitted applications will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}