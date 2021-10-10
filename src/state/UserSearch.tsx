import React, { useState } from 'react';

const UserSearch: React.FC = () => {
  const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 22 },
    { name: 'Flex', age: 21 },
  ];

  const [name, setName] = useState('');
  const [userSearch, setUserSearch] = useState<
    { name: string; age: number } | undefined
  >();

  const onSearch = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    console.log('foundUser', foundUser);
    setUserSearch(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onSearch}>Find</button>
      <div>
        {/* {userSearch && userSearch.name === '' ? (
          <>No users found!</>
        ) : (
          <>
            <p>{userSearch && userSearch.name}</p>
            <p>{userSearch && userSearch.age}</p>
          </>
        )} */}

        <p>
          {userSearch && userSearch.name} &nbsp;{userSearch && userSearch.age}
        </p>
      </div>
    </div>
  );
};

export default UserSearch;
