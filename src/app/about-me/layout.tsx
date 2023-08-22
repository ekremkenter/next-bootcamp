export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Hello about me layout!</h1>
      {children}
    </main>
  );
}
