import React, { useState } from 'react';
const Guest: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>

      <ul>
        {guests.map((guest: any, i) => (
          <li key={i}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Guest;
