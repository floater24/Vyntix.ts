import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign in to Vyntix.ts</h1>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
