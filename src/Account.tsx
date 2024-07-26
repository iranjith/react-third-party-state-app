import { useShoeStore } from "./store/shoestore";

export function Account() {
  const { user } = useShoeStore();

  return (
    <>
      <h1>Account</h1>
      {user ? <p>Email: {user.email}</p> : <p>Please log in.</p>}
    </>
  );
}
