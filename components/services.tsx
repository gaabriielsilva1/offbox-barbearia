import Link from "next/link"
import { Scissors, SprayCan, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Scissors,
    title: "CORTE CLÁSSICO",
    description: "Degradê, undercut, pompadour e mais. Técnica precisa com acabamento impecável.",
    price: "R$ 50",
    duration: "45 min",
    message: "Oi! Quero agendar um Corte Clássico e vi no site."
  },
  {
    icon: Scissors,
    title: "CORTE + BARBA",
    description: "Combo completo. Corte na régua e barba alinhada com navalha.",
    price: "R$ 80",
    duration: "1h",
    message: "Oi! Quero agendar o Combo de Corte + Barba e vi no site."
  },
  {
    icon: SprayCan,
    title: "BARBA COMPLETA",
    description: "Modelagem, hidratação e toalha quente. Ritual completo.",
    price: "R$ 40",
    duration: "30 min",
    message: "Oi! Quero agendar o serviço de Barba Completa e vi no site."
  },
  {
    icon: Scissors,
    title: "SOBRANCELHA",
    description: "Design de sobrancelha na navalha ou pinça, realçando o olhar e o rosto.",
    price: "R$ 30",
    duration: "15 min",
    message: "Oi! Quero agendar o design de Sobrancelha e vi no site."
  },
  {
    icon: SprayCan,
    title: "PIGMENTAÇÃO",
    description: "Preenchimento de barba ou cabelo. Resultado natural e duradouro.",
    price: "R$ 60",
    duration: "45 min",
    message: "Oi! Quero agendar uma Pigmentação e vi no site."
  },
  {
    icon: Scissors,
    title: "CORTE KIDS",
    description: "Para os pequenos rebeldes. Ambiente descontraído e corte estiloso.",
    price: "R$ 35",
    duration: "30 min",
    message: "Oi! Quero agendar um Corte Kids e vi no site."
  }
]

export function Services() {
  return (
    <section id="servicos" className="min-h-screen flex items-center snap-start scroll-mt-16 lg:scroll-mt-20 py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-primary uppercase">
            Nossos Serviços
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-foreground mt-4">
            O QUE <span className="text-primary">FAZEMOS</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 border border-border bg-secondary transition-all duration-300 hover:border-primary hover:bg-secondary/50"
            >

              <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl text-primary">
                    {service.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {service.duration}
                  </p>
                </div>
                <Link
                  href={`https://api.whatsapp.com/send?phone=5555997169462&text=${encodeURIComponent(service.message)}`}
                  target="_blank"
                >
                  <Button
                    size="sm"
                    className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    AGENDAR
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
