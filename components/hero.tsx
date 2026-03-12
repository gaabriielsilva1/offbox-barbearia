import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scissors } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-abstract.png"
          alt="OffBox Barbearia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border mb-6">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Barbearia Alternativa
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-6">
            <span className="text-foreground">OFF</span>
            <span className="text-primary">BOX</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            A barbearia que vai além do básico e traz uma nova experiência para quem busca estilo e atitude.
            Quebramos padrões e oferecemos mais do que cortes: aqui você encontra arte, design e personalidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://api.whatsapp.com/send?phone=5555997169462&text=Oi%2C+tudo+bem%3F+Quero+agendar+um+horário+☺%EF%B8%8F" target="_blank">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider h-14 px-8 w-full sm:w-auto"
              >
                AGENDAR HORARIO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#servicos">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-medium tracking-wider h-14 px-8 w-full sm:w-auto"
              >
                CONHECER SERVICOS
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border max-w-lg">
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-primary">8+</p>
              <p className="text-xs tracking-wider text-muted-foreground mt-1">ANOS</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-primary">5K+</p>
              <p className="text-xs tracking-wider text-muted-foreground mt-1">CLIENTES</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-primary">5.0</p>
              <p className="text-xs tracking-wider text-muted-foreground mt-1">AVALIACAO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
