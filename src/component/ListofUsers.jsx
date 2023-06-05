import React from 'react';

const ListofUsers = ({ user }) => {
  return (
    <div>
      {user.map((item, index) => {
        <p>{item.email}</p>;
        <p>{item.phone}</p>;
      })}
    </div>
  );
};

export default ListofUsers;
