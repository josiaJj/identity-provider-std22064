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
