import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";

type Variant = "primary" | "secondary" | "dark";

const variantClasses: Record<Variant, string> = {
  primary: "bg-indigo text-offwhite hover:opacity-90",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-offwhite",
  dark: "bg-ink text-offwhite hover:opacity-90",
};

const base =
  "inline-flex min-h-[52px] items-center justify-center gap-2 px-[26px] font-sans text-[15px] font-semibold transition-opacity disabled:cursor-not-allowed disabled:opacity-40";

interface SharedProps {
  variant?: Variant;
  trailingArrow?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsLinkProps = SharedProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({
  variant = "primary",
  trailingArrow = false,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLinkProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {trailingArrow && <ArrowRight />}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {trailingArrow && <ArrowRight />}
    </button>
  );
}
