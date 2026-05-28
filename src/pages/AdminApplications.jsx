import {c as _c} from "react/compiler-runtime";
import applications from "../data/applications";

export default function AdminApplications() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        All Applications
      </h1>

      <div className="grid gap-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow rounded-xl p-4"
          >
            <h2 className="font-bold text-xl">
              {app.applicant}
            </h2>

            <p>Parish: {app.parish}</p>
            <p>Amount: {app.amount}</p>
            <p>Status: {app.status}</p>

            <div className="mt-4 flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Approve
              </button>

              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}