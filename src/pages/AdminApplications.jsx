import applications from "../data/applications";

const currentUser = {
  id: 999,
  role: "admin",
};

export default function AdminApplications() {
  if (currentUser.role !== "admin") {
    return <h1>Access Denied</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        All Applications (Admin)
      </h1>

      {applications.map((app) => (
        <div key={app.id} className="bg-white p-4 shadow rounded mb-3">
          <h2>{app.applicant}</h2>
          <p>{app.parish}</p>
          <p>{app.amount}</p>
          <p>{app.status}</p>

          <div className="mt-3 flex gap-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Approve
            </button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}