import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={className} aria-label="Solo Regular — página inicial">
      <img
        src={logo.url}
        alt="Solo Regular — Desenvolvimento Urbano"
        width={48}
        height={48}
        className="h-11 w-11 rounded-full object-cover"
      />
    </Link>
  );
}
