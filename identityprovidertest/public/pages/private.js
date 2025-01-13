import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PrivatePage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading]);

  if (loading) return <p>Chargement...</p>;

  return <h1>Page Privée (Accès réservé aux utilisateurs connectés)</h1>;
}
