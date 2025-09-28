const User = ({ user }) => {
  return (
    <div
      className="card w-full bg-base-100 card-xs shadow-sm"
      style={{
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
      `,
      }}
    >
      <div className="card-body">
        <h2 className="card-title"> {user.name} </h2>
        <p>{user.email}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default User;
