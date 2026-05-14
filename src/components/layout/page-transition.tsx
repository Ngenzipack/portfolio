type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}
