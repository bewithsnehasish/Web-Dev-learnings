export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-4 border-b text-center">
        20% off for the next few Days
      </div>
      {children}
    </div>
  );
}
