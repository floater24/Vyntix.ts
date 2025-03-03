"use client";

import { trpc } from "../../backend/lib/trpc";

export default function Page() {
  const auth = trpc.auth.me.useQuery();

  return (
    <div>
      <h1>Welcome to the Fullstack Bun Framework!</h1>
      {auth.data ? (
        <p>Logged in as: {auth.data.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
