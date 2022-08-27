import { useAuth0} from "@auth0/auth0-react";

import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <a>Loading ...</a>;
  }

  return (
    isAuthenticated && (
        
      <a>
        
       
        {user.name}

      </a>
      
    )
  );
};

export default Profile;