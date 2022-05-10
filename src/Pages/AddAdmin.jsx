import React from "react";

import AdminContainer from "../Components/AdminContainer/AdminContainer";
import AdminMenu from "../Components/AdminMenu/AdminMenu";

const AddAdmin = () => {
  return (
    <div>
      <div>
        <AdminMenu></AdminMenu>
      </div>
      <div>
        <AdminContainer></AdminContainer>
      </div>
    </div>
  );
};

export default AddAdmin;
