import React from 'react';

const User = () => {
  // Dummy user data
  const user = {
    name: 'mohadese akrami',
    email: 'mohadese@example.com',
    age: 27,
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default User;
