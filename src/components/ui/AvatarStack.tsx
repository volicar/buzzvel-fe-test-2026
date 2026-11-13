import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  size?: "sm" | "md";
  ring?: "cream" | "sun";
};

const sizes = {
  sm: { pixels: 32, className: "size-8" },
  md: { pixels: 40, className: "size-10" },
};

const rings = {
  cream: "border-cream",
  sun: "border-sun",
};

export function AvatarStack({ avatars, size = "sm", ring = "cream" }: AvatarStackProps) {
  const { pixels, className } = sizes[size];

  return (
    <div className="flex" aria-hidden="true">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={pixels}
          height={pixels}
          className={`-ml-2 rounded-full border-2 bg-primary-light first:ml-0 ${className} ${rings[ring]}`}
        />
      ))}
    </div>
  );
}
