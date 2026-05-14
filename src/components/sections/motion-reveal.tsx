import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  amount?: number;
  once?: boolean;
};

export function MotionReveal({
  children,
  className,
}: MotionRevealProps) {
  return <div className={className}>{children}</div>;
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
}: StaggerProps) {
  return <div className={className}>{children}</div>;
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
};

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return <div className={cn(className)}>{children}</div>;
}
