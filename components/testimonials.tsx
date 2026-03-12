import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Gabriel S.",
    role: "Cliente há 7 anos",
    content: "Melhor barbearia da cidade. O ambiente é muito bom, sempre tocando uma boa música e os cortes são impecáveis.",
    rating: 5
  },
  {
    name: "Rafael A.",
    role: "Cliente há 1 ano",
    content: "Nunca achei uma barbearia que entendesse meu estilo até conhecer a OffBox. Corte preciso e atendimento nota 10.",
    rating: 5
  },
  {
    name: "Bruno C.",
    role: "Cliente há 3 anos",
    content: "Ambiente único, trilha sonora pesada e um corte que nenhum outro lugar faz igual. Recomendo de olhos fechados.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="min-h-screen flex items-center snap-start scroll-mt-16 lg:scroll-mt-20 py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-primary uppercase">
            Depoimentos
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-foreground mt-4">
            O QUE NOSSOS <span className="text-primary">CLIENTES</span> DIZEM
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-secondary border border-border hover:border-primary transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div>
                <p className="font-medium text-foreground tracking-wider">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
