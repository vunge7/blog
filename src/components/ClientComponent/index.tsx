'use client'; // <- se espalha para todos os componentes que você deseja renderizar no cliente

export function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log('ClientComponent rendered on the client');
  return (
    <div>
      <h1>Client Component</h1>
      <p>This is a client-side component.</p>
      {children}
    </div>
  );
}
