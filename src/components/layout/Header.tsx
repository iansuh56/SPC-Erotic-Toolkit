"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { LogoMark } from "@/components/icons/LogoMark";
import { MenuIcon, CloseIcon } from "@/components/icons/MenuIcon";
import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { useFocusTrap } from "@/lib/useFocusTrap";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  useFocusTrap(menuRef, open, close);

  return (
    <header className="relative border-b border-ink/20 bg-paper">
      <Container className="flex h-[84px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display text-[26px] font-semibold text-ink">
            {siteConfig.siteName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 font-sans text-[15px] font-medium text-ink ${
                  active ? "shadow-[inset_0_-3px_0_0_var(--indigo)]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.nav.primaryAction.href} variant="primary">
            {siteConfig.nav.primaryAction.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 min-w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute inset-x-0 top-full z-50 border-t border-ink/20 bg-paper lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                  className="flex min-h-11 items-center font-sans text-[16px] font-medium text-ink"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2">
              <Button href={siteConfig.nav.primaryAction.href} variant="primary" onClick={close}>
                {siteConfig.nav.primaryAction.label}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
