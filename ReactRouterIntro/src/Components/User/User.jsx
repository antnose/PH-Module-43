import { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/user/${user.id}`);
  };

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  ).then((res) => res.json());
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
          {/* One method to navigate go for specific path */}
          {/* <Link to={`/user/${user.id}`} className="btn btn-primary">
            View Details
          </Link> */}

          {/* Second Way to go for specific path */}
          {/* <button onClick={() => handleNavigate()} className="btn btn-primary">
            Show Details
          </button> */}

          {/* Detail info */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="btn btn-primary"
          >
            {showInfo ? "Hide" : "Show"}
          </button>
          {showInfo && (
            <Suspense fallback={<p>Loading.......</p>}>
              <UserDetails2 userPromise={userPromise} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
