import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch(`http://142.93.212.248:8080/newcar/model/list/MFR010`);
    const users = await response.json();
    const usersa = users.model_data;
    setUsers(usersa);
  }

  return (
    
    <div>
    <select>
       {users.map(user =>(
       <option>
         {user.max_variant_price}
       </option>

       ))}
       </select>

       <div>
  {users.filter(person => person.model_name == "Jeep Compass").map(filteredPerson => (
    <li>
      {filteredPerson.max_variant_price}
    </li>
  ))}
</div>
    
</div>
  );
};

export default User;
