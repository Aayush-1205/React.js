import React, { useContext } from "react";
import { userContext } from "../../Context/Context";

const Userid = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      {user.map((u) => (
        <div key={u.id}>
          <h1 className="p-3 bg-white text-xl mb-3 w-28 hover:bg-slate-200">
            {u.name} {u.username} {u.email}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Userid;
