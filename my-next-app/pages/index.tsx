"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
}

export default function Home() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log("Session data:", session);
    console.log("Session status:", status);
    
    if (session) {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data: User[]) => setUsers(data));
    }
  }, [session,status]);
  if (status === "loading") return <p>Loading...</p>; // ✅ ローディング中のUIを追加！

  return (
    <div>
      <h1>Vyntix.ts - Next Gen Backend</h1>

      {session ? (
        <>
          <p>Logged in as: {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("github", { callbackUrl: "https://vyntix-ts.fly.dev" })}>
          Sign In with GitHub
        </button>
      )}

      <h2>Users List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.email}</li>)
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
}
