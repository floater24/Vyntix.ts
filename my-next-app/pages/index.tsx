"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

// ユーザーの型を定義
type UserType = {
  id: string;
  email: string;
};

export default function Home() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<UserType[]>([]); // 型を明示！

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data: UserType[]) => setUsers(data)) // 受け取るデータの型を明示！
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>Vyntix.ts - Next Gen Backend</h1>

      {session ? (
        <>
          <p>Logged in as: {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("github", { callbackUrl: "https://vyntix-ts.fly.dev/api/auth/signin" })}>
  Sign In with GitHub
</button>

      )}

      <h2>Users List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.email}</li>) // `id` & `email` の型が保証される！
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
}
