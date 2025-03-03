import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthPage() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Logged in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
    </div>
  );
}
