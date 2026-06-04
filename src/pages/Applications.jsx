import applications from "../data/applications";

const currentUser = {
  id: 101,
  role: "user",
};

export default function Applications() {
  const userApplications = applications.filter(
    (app) => app.userId === currentUser.id
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        My Applications
      </h1>

      {userApplications.length === 0 ? (
        <p>No applications found</p>
      ) : (
        userApplications.map((app) => (
          <div key={app.id} className="bg-white p-4 shadow rounded mb-3">
            <h2>{app.applicant}</h2>
            <p>{app.parish}</p>
            <p>{app.amount}</p>
            <p>{app.status}</p>
          </div>
        ))
      )}
    </div>
  );
}