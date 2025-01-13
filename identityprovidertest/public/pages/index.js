// pages/index.js
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Link from "next/link";

const Login = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).catch(console.error);
};

const Logout = () => {
  signOut(auth).catch(console.error);
};

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div style={{ padding: 20 }}>
      <h1>Application Firebase avec Next.js</h1>
      <div>
        <Link href="/public">Lien Public</Link>
        {user && <Link href="/private">Lien Privé</Link>}
      </div>
      <div style={{ marginTop: 20 }}>
        {user ? (
          <>
            <p>Bienvenue, {user.displayName}</p>
            <button onClick={Logout}>Se déconnecter</button>
          </>
        ) : (
          <button onClick={Login}>Se connecter avec Google</button>
        )}
      </div>
    </div>
  );
}
