export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>List입니다.(layout안에 제목)</h1>
      {children}
    </div>
  );
}
