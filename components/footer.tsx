import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border snap-start">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-primary">
              OFF
            </span>
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-foreground">
              BOX
            </span>
          </Link>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm tracking-wider text-center">
            CORTES SÉRIOS. ATITUDE REAL. FORA DA CAIXA.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/offbox_barbearia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 OffBox Barbearia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
