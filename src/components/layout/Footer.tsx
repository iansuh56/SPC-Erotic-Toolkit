import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/primitives/Container";
import { Skeleton } from "@/components/primitives/Skeleton";

export function Footer() {
  return (
    <footer>
      <div className="flex h-3" aria-hidden="true">
        <div className="bg-indigo" style={{ flex: 3 }} />
        <div className="bg-rose" style={{ flex: 2 }} />
        <div className="bg-yellow" style={{ flex: 1 }} />
      </div>

      <div className="bg-ink text-offwhite">
        <Container className="py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-display text-[22px] font-semibold">{siteConfig.siteName}</p>
              <Skeleton spec={siteConfig.footer.description} className="mt-4 max-w-sm" />
            </div>

            {siteConfig.footer.columns.map((column) => (
              <div key={column.heading}>
                <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-yellow">
                  {column.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label + link.href}>
                      <Link
                        href={link.href}
                        className="flex min-h-11 items-center text-[15px] text-offwhite underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-offwhite/20 pt-6 font-mono text-[12px] text-offwhite/80 sm:flex-row sm:items-center">
            <p>{siteConfig.footer.bottomRow.courseLine}</p>
            <p>{siteConfig.footer.bottomRow.credits}</p>
            <a
              href="#main-content"
              className="flex min-h-11 items-center gap-1 text-offwhite hover:underline"
            >
              {siteConfig.footer.bottomRow.backToTopLabel}
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
