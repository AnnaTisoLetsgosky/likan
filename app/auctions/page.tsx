"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Clock, Gavel, Search } from "lucide-react"
import { useState, useMemo } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Placeholder data for auctions
const allAuctions = [
  {
    id: 1,
    name: "Antica Scultura Greca",
    description: "Un pezzo d'arte classico, risalente al V secolo a.C.",
    currentBid: "€15.000",
    timeRemaining: "5d 20h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Arte",
    status: "Attiva",
    price: 15000,
  },
  {
    id: 2,
    name: "Set di Monete Romane",
    description: "Collezione di 10 monete imperiali romane in bronzo.",
    currentBid: "€800",
    timeRemaining: "2d 14h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Collezionismo",
    status: "Attiva",
    price: 800,
  },
  {
    id: 3,
    name: "Chitarra Elettrica Vintage '70",
    description: "Modello raro, suono iconico, perfetta per collezionisti.",
    currentBid: "€1.800",
    timeRemaining: "1d 08h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Musica",
    status: "Attiva",
    price: 1800,
  },
  {
    id: 4,
    name: "Orologio da Polso Svizzero",
    description: "Cronografo automatico, edizione limitata.",
    currentBid: "€3.500",
    timeRemaining: "7d 03h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Orologi",
    status: "Attiva",
    price: 3500,
  },
  {
    id: 5,
    name: "Libro Antico Rilegato in Pelle",
    description: "Prima edizione di un classico della letteratura, 1700s.",
    currentBid: "€600",
    timeRemaining: "3d 06h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Libri",
    status: "Attiva",
    price: 600,
  },
  {
    id: 6,
    name: "Fotocamera Analogica Leica",
    description: "Modello M3, in ottime condizioni, con obiettivo 50mm.",
    currentBid: "€2.200",
    timeRemaining: "0d 10h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Elettronica",
    status: "In Scadenza",
    price: 2200,
  },
  {
    id: 7,
    name: "Vaso Cinese Dinastia Qing",
    description: "Porcellana dipinta a mano, periodo Qianlong.",
    currentBid: "€4.000",
    timeRemaining: "4d 02h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Arte",
    status: "Attiva",
    price: 4000,
  },
  {
    id: 8,
    name: "Auto Sportiva Classica (Modellino)",
    description: "Modellino dettagliato in scala 1:18, edizione limitata.",
    currentBid: "€120",
    timeRemaining: "0d 05h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Veicoli",
    status: "In Scadenza",
    price: 120,
  },
  {
    id: 9,
    name: "Abito da Sera Designer",
    description: "Creazione unica di un famoso stilista, taglia 40.",
    currentBid: "€900",
    timeRemaining: "1d 22h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Abbigliamento",
    status: "Attiva",
    price: 900,
  },
  {
    id: 10,
    name: "Set di Gioielli Antichi",
    description: "Collana e orecchini in argento con pietre preziose.",
    currentBid: "€1.500",
    timeRemaining: "2d 07h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Gioielli",
    status: "Attiva",
    price: 1500,
  },
  {
    id: 11,
    name: "Console da Gioco Retrò",
    description: "Modello originale degli anni '80, perfettamente funzionante.",
    currentBid: "€300",
    timeRemaining: "0d 08h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Elettronica",
    status: "In Scadenza",
    price: 300,
  },
  {
    id: 12,
    name: "Dipinto Astratto Contemporaneo",
    description: "Opera unica di un artista moderno, colori vivaci.",
    currentBid: "€2.500",
    timeRemaining: "6d 01h",
    image: "/placeholder.svg?height=250&width=400",
    category: "Arte",
    status: "Attiva",
    price: 2500,
  },
]

const uniqueCategories = Array.from(new Set(allAuctions.map((auction) => auction.category)))

export default function AuctionsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [auctionStatus, setAuctionStatus] = useState<string>("Tutti") // "Tutti", "Attiva", "In Scadenza"

  const filteredAuctions = useMemo(() => {
    return allAuctions.filter((auction) => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(auction.category)) {
        return false
      }

      // Price range filter
      const price = auction.price
      if (minPrice !== "" && price < Number.parseFloat(minPrice)) {
        return false
      }
      if (maxPrice !== "" && price > Number.parseFloat(maxPrice)) {
        return false
      }

      // Status filter
      if (auctionStatus !== "Tutti" && auction.status !== auctionStatus) {
        return false
      }

      return true
    })
  }, [selectedCategories, minPrice, maxPrice, auctionStatus])

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)))
  }

  // Funzione per determinare le classi e le dimensioni delle immagini per un layout più sfalsato
  const getCardSizeClasses = (index: number) => {
    let colSpan = "col-span-1"
    let rowSpan = "" // Nessun row-span di default
    let imageWidth = 400
    let imageHeight = 250 // Altezza immagine di default per h-48

    // Pattern per dimensioni più variegate
    // Tipo A: Grande (più larga e più alta)
    if (index % 7 === 0) {
      // 1a, 8a, 15a asta...
      colSpan = "sm:col-span-2 md:col-span-2 lg:col-span-2"
      rowSpan = "sm:row-span-2 md:row-span-2"
      imageWidth = 800
      imageHeight = 400 // Corrisponde a h-80 o simile
    }
    // Tipo B: Media Larga
    else if (index % 7 === 3) {
      // 4a, 11a, 18a asta...
      colSpan = "sm:col-span-2 md:col-span-2"
      imageWidth = 600
      imageHeight = 300 // Corrisponde a h-64 o simile
    }
    // Tipo C: Media Alta
    else if (index % 7 === 5) {
      // 6a, 13a, 20a asta...
      rowSpan = "sm:row-span-2 md:row-span-2"
      imageWidth = 400
      imageHeight = 400 // Corrisponde a h-80 o simile
    }

    const cardClasses = `
      bg-white text-card-foreground shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10
      ${colSpan} ${rowSpan}
    `

    let currentImageHeightClass = "h-48" // Default
    if (rowSpan.includes("row-span-2")) {
      currentImageHeightClass = "h-64 sm:h-72 md:h-80" // Per schede alte
    } else if (colSpan.includes("col-span-2") && !rowSpan.includes("row-span-2")) {
      currentImageHeightClass = "h-56 sm:h-64" // Per schede larghe ma non alte
    }

    const imageClasses = `
      object-cover w-full ${currentImageHeightClass}
    `

    return { cardClasses, imageClasses, imageWidth, imageHeight }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#FFFCE0] text-[#4C1D95]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-[#FFFCE0] text-[#4C1D95] shadow-sm border-b border-[#4C1D95]/10">
        <div className="container mx-auto flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Gavel className="h-6 w-6" />
            <span className="text-2xl font-bold tracking-tight">Likan</span>
          </Link>

          {/* Search Bar in Header - Centrata */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-2 w-full max-w-md">
            <Input
              type="text"
              placeholder="Cerca oggetti, categorie..."
              className="flex-1 h-10 px-4 rounded-md border border-[#4C1D95]/30 focus:border-[#4C1D95] focus:ring-1 focus:ring-[#4C1D95] text-[#4C1D95] placeholder:text-[#4C1D95]/60 bg-white"
            />
            <Button className="h-10 w-10 bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90">
              <Search className="h-5 w-5" />
              <span className="sr-only">Cerca</span>
            </Button>
          </div>

          <nav className="hidden md:flex gap-6 flex-shrink-0">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Aste Attive
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Come Funziona
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contatti
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Accedi
            </Link>
          </nav>

          <Button className="md:hidden bg-[#4C1D95] text-[#FFFCE0] hover:bg-[#4C1D95]/90">Menu</Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:sticky lg:top-8 h-fit space-y-6 p-6 bg-white rounded-lg shadow-sm border border-[#4C1D95]/10">
          <h2 className="text-xl font-bold text-[#4C1D95] mb-4">Filtri</h2>

          {/* Category Filter */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="categories">
              <AccordionTrigger className="text-lg font-semibold text-[#4C1D95] hover:no-underline">
                Categoria
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-2">
                {uniqueCategories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked: boolean) => handleCategoryChange(category, checked)}
                      className="border-[#4C1D95] data-[state=checked]:bg-[#4C1D95] data-[state=checked]:text-[#FFD54F]"
                    />
                    <Label htmlFor={`category-${category}`} className="text-[#4C1D95]">
                      {category}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Price Range Filter */}
          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-semibold text-[#4C1D95]">Fascia di Prezzo</h3>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 border-[#4C1D95]/30 focus:border-[#4C1D95] text-[#4C1D95] placeholder:text-[#4C1D95]/60 bg-white"
              />
              <span className="text-[#4C1D95]">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 border-[#4C1D95]/30 focus:border-[#4C1D95] text-[#4C1D95] placeholder:text-[#4C1D95]/60 bg-white"
              />
            </div>
          </div>

          {/* Auction Status Filter */}
          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-semibold text-[#4C1D95]">Stato Asta</h3>
            <RadioGroup value={auctionStatus} onValueChange={setAuctionStatus} className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Tutti" id="status-all" className="border-[#4C1D95] text-[#4C1D95]" />
                <Label htmlFor="status-all" className="text-[#4C1D95]">
                  Tutti
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Attiva" id="status-active" className="border-[#4C1D95] text-[#4C1D95]" />
                <Label htmlFor="status-active" className="text-[#4C1D95]">
                  Attiva
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="In Scadenza" id="status-ending" className="border-[#4C1D95] text-[#4C1D95]" />
                <Label htmlFor="status-ending" className="text-[#4C1D95]">
                  In Scadenza
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* No explicit "Apply Filters" button needed as filters apply on change */}
        </aside>

        {/* Auction Listings */}
        <section className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4C1D95] text-balance">
            Tutte le Aste
          </h1>
          {filteredAuctions.length === 0 ? (
            <p className="text-center text-lg text-[#4C1D95]/80">Nessuna asta trovata con i filtri selezionati.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredAuctions.map((auction, index) => {
                const { cardClasses, imageClasses, imageWidth, imageHeight } = getCardSizeClasses(index)
                return (
                  <Card key={auction.id} className={cardClasses}>
                    <CardHeader className="p-0">
                      <Image
                        src={auction.image || "/placeholder.svg"}
                        width={imageWidth}
                        height={imageHeight}
                        alt={auction.name}
                        className={imageClasses}
                      />
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                      <CardTitle className="text-xl font-semibold text-[#4C1D95]">{auction.name}</CardTitle>
                      <CardDescription className="text-sm">{auction.description}</CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                        <span>
                          Offerta: <span className="font-bold text-[#4C1D95] text-base">{auction.currentBid}</span>
                        </span>
                        <span className="flex items-center gap-1 text-[#4C1D95]">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{auction.timeRemaining}</span>
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-sm py-2">
                        Fai un'Offerta
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          )}
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border border-[#4C1D95] text-[#4C1D95] hover:bg-[#4C1D95] hover:text-[#FFD54F] bg-transparent"
            >
              Carica Altre Aste
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#4C1D95]/10 bg-[#FFFCE0] text-[#4C1D95] justify-center">
        <p className="text-xs text-[#4C1D95]/80">&copy; {new Date().getFullYear()} Likan. Tutti i diritti riservati.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Termini di Servizio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
    