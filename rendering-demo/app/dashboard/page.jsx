export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const time = new Date().toISOString();

  return (
    <div>
      <h1>Dashboard (Server-Side Rendering)</h1>
      <p>Rendered at: {time}</p>
      <p>This page is generated on every request.</p>
    </div>
  );
}
