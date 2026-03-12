import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "ENDEREÇO",
    content: "Rua dos Andradas, 1175",
    subtitle: "Centro - Santa Maria, RS"
  },
  {
    icon: Phone,
    title: "TELEFONE",
    content: "(55) 99716-9462",
    subtitle: "WhatsApp disponível"
  },
  {
    icon: Clock,
    title: "HORÁRIO",
    content: "Seg a Sáb: 9h - 20h",
    subtitle: "Dom: Fechado"
  }
]

const hours = [
  { day: "Segunda", hours: "10:00 - 20:00" },
  { day: "Terça", hours: "10:00 - 20:00" },
  { day: "Quarta", hours: "10:00 - 20:00" },
  { day: "Quinta", hours: "10:00 - 20:00" },
  { day: "Sexta", hours: "10:00 - 21:00" },
  { day: "Sábado", hours: "10:00 - 18:00" },
  { day: "Domingo", hours: "Fechado", closed: true }
]

export function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <span className="text-xs tracking-[0.3em] text-primary uppercase">
              Contato
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              BORA <span className="text-primary">MARCAR?</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-12">
              Agende pelo WhatsApp ou passe aqui pra conhecer.
              A primeira cerveja é por nossa conta.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider text-muted-foreground mb-1">
                      {info.title}
                    </p>
                    <p className="font-medium text-foreground">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://api.whatsapp.com/send?phone=5555997169462&text=Oi%2C+tudo+bem%3F+Quero+agendar+um+horário+☺%EF%B8%8F" target="_blank">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider h-14 px-8 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  CHAMAR NO WHATSAPP
                </Button>
              </Link>
              <Link href="https://www.instagram.com/offbox_barbearia/" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-background font-medium tracking-wider h-14 px-8 w-full sm:w-auto"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  INSTAGRAM
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Hours */}
          <div className="bg-background border border-border p-8 lg:p-12">
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground mb-8">
              HORÁRIO DE <span className="text-primary">FUNCIONAMENTO</span>
            </h3>

            <div className="space-y-4">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between py-3 border-b border-border ${item.closed ? "text-muted-foreground" : "text-foreground"
                    }`}
                >
                  <span className="tracking-wider">{item.day}</span>
                  <span className={item.closed ? "text-muted-foreground" : "text-primary font-medium"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 aspect-video border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.8584857416954!2d-53.809181124458315!3d-29.68685167510526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb3989359e9b%3A0x6d90a18f8e3230b!2sRua%20Dos%20Andradas%2C%201175%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097010-032!5e0!3m2!1spt-BR!2sbr!4v1710260400000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - OffBox Barbearia"
              ></iframe>
            </div>
            <div className="mt-4">
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+dos+Andradas,+1175,+Santa+Maria,+RS"
                target="_blank"
                className="text-primary text-sm font-medium hover:underline flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Como chegar (Google Maps)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
