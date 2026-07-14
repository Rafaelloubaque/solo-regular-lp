import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-solo-regular.jpg";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={className} aria-label="Solo Regular — página inicial">
      <img
        src={logo}
        alt="Solo Regular — Desenvolvimento Urbano"
        width={200}
        height={200}
        className="h-12 w-12 rounded-full object-contain shadow-sm ring-1 ring-border/60"
      />
    </Link>
  );
}
