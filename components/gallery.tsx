"use client"

import Image from "next/image"
import { useState } from "react"
import { X, Instagram } from "lucide-react"

const galleryImages = [
  {
    src: "/images/cut-1.jpg",
    alt: "Corte fade moderno",
    category: "FADE"
  },
  {
    src: "/images/cut-2.jpg",
    alt: "Corte texturizado",
    category: "TEXTURE"
  },
  {
    src: "/images/cut-3.jpg",
    alt: "Undercut com barba",
    category: "UNDERCUT"
  },
  {
    src: "/images/hero-barber.jpg",
    alt: "Ambiente da barbearia",
    category: "AMBIENTE"
  },
  {
    src: "/images/barber-action.jpg",
    alt: "Barbeiro em ação",
    category: "PROCESSO"
  },
  {
    src: "/images/cut-1.jpg",
    alt: "Corte clássico",
    category: "CLÁSSICO"
  }
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="min-h-screen flex items-center snap-start scroll-mt-16 lg:scroll-mt-20 py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs tracking-[0.3em] text-primary uppercase">
              Galeria
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-foreground mt-4">
              NOSSO <span className="text-primary">TRABALHO</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/offbox_barbearia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm tracking-wider">@OFFBOX_BARBEARIA</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-square overflow-hidden bg-background"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xs tracking-[0.2em] text-foreground">
                  {image.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-4xl aspect-square">
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
