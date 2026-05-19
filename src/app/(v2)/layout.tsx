export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {children}
    </div>
  );
}
