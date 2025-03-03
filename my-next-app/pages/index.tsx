import { trpc } from "../lib/trpc";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const auth = trpc.auth.me.useQuery();

  return (
    <div>
      <h1>Welcome to the Fullstack Bun Framework!</h1>
      {session ? (
        <>
          <p>Logged in as: {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
      <p>tRPC Auth Data: {auth.data ? auth.data.email : "Not logged in"}</p>
    </div>
  );
}
