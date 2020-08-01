import React, {useRef} from 'react';
import UserList from "./UserList";

function App() {
  const users = [
        {
            id: 1,
            userName: "one",
            email: "one@gmail.com",
        },
        {
            id: 2,
            userName: "two",
            email: "two@gmail.com",
        },
        {
            id: 3,
            userName: "three",
            email: "three@gmail.com",
        }
    ];

  const nextId = useRef(4);

  const onCreate = () => {
      console.log(nextId.current);
      nextId.current += 1;
  }

  return (
      <UserList users={users} />
  )
}

export default App;
