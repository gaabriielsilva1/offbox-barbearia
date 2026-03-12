"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#sobre", label: "SOBRE" },
    { href: "#servicos", label: "SERVIÇOS" },
    { href: "#galeria", label: "GALERIA" },
    { href: "#contato", label: "CONTATO" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3">
            <Image
              src="/images/logo-offbox.png"
              alt="OffBox Logo"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
            />
            <span className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl tracking-wider text-foreground">
              OFFBOX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.instagram.com/offbox_barbearia/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5555997169462&text=Oi%2C+tudo+bem%3F+Quero+agendar+um+horário+☺%EF%B8%8F"
              target="_blank"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider">
                <Phone className="w-4 h-4 mr-2" />
                AGENDAR
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link
                  href="https://www.instagram.com/offbox_barbearia/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=5555997169462&text=Oi%2C+tudo+bem%3F+Quero+agendar+um+horário+☺%EF%B8%8F"
                  target="_blank"
                  className="flex-1"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    AGENDAR
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
