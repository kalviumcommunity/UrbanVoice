export const revalidate = 60;

export default async function News() {
  const time = new Date().toISOString();

  return (
    <div>
      <h1>News (ISR — Hybrid Rendering)</h1>
      <p>Rendered at: {time}</p>
      <p>This page updates every 60 seconds.</p>
    </div>
  );
}