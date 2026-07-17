import logoImage from "@/assets/logo-solo-regular.jpg";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex shrink-0 items-center ${className || ""}`}>
      <img
        src={logoImage}
        alt="Solo Regular"
        width={48}
        height={48}
        className="size-12 rounded-full object-cover"
      />
    </div>
  );
}
