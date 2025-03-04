import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>My Next.js App</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
