import Image from "next/image"
import { Zap, Music, Skull, Users } from "lucide-react"

const features = [
  {
    icon: Skull,
    title: "ESTILO",
    description: "Um ambiente pensado para quem valoriza autenticidade e um bom corte."
  },
  {
    icon: Music,
    title: "PLAYLIST",
    description: "Da eletrônica ao trap, sempre com o melhor som."
  },
  {
    icon: Zap,
    title: "EXCELÊNCIA",
    description: "Profissionais qualificados para entregar o serviço que você espera."
  },
  {
    icon: Users,
    title: "CONVÍVIO",
    description: "Mais que clientes, somos uma família que valoriza um bom papo e um corte impecável."
  }
]

export function About() {
  return (
    <section id="sobre" className="min-h-screen flex items-center snap-start scroll-mt-16 lg:scroll-mt-20 py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-square">
            <Image
              src="/images/about-barber.png"
              alt="Barbeiro em ação"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs tracking-[0.3em] text-primary uppercase">
              Sobre Nós
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
              QUALIDADE E<br />
              <span className="text-primary">PERSONALIDADE</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Na Off Box, não tem só corte. Tem tinta, tem arte, tem trampo... tem uma pá de coisa pra te deixar fora da caixa! Cada detalhe do nosso trabalho é pensado para refletir a sua autenticidade. Aqui, o visual é expressão, atitude e estilo. Não é só um corte de cabelo, é um manifesto de quem você é.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">Aqu levamos a sério o lema “Fora da Caixa”. Não seguimos tendências, a gente cria. Somos desencaixados mesmo, e estamos prontos para mostrar como o design e a arte podem transformar o seu estilo.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium tracking-wider text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
