"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Clock,
  Gavel,
  Sparkles,
  Users,
  Car,
  Book,
  Gem,
  Camera,
  Home,
  Shirt,
  Watch,
  Paintbrush,
  Music,
  Gamepad,
  Search,
} from "lucide-react"
import { useState } from "react"
import { SellItemDialog } from "@/components/sell-item-dialog"

export default function HomePage() {
  const [isSellDialogOpen, setIsSellDialogOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#FFFCE0] text-[#4C1D95] ">
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

      {/* Category Scroll Section */}
      <section className="w-full py-4 bg-[#FFFCE0] border-[#4C1D95]/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex overflow-x-auto whitespace-nowrap py-2 scrollbar-hide justify-center">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Car className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Veicoli</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Book className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Libri</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Gem className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Gioielli</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Camera className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Elettronica</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Home className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Casa</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Shirt className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Abbigliamento</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Watch className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Orologi</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Paintbrush className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Arte</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Music className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Musica</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200 flex-shrink-0"
            >
              <Gamepad className="h-8 w-8 text-[#4C1D95]" />
              <span className="text-sm font-medium text-[#4C1D95]">Giochi</span>
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Hero Section - Simplified and direct */}
        <section className="w-full py-1 md:py-5 lg:py-10 bg-[#FFFCE0] text-[#4C1D95] flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center mx-auto max-w-4xl">
            <div className="space-y-8">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Esplora il Mondo delle Aste con Likan
              </h1>
              <p className="mx-auto max-w-[800px] text-[#4C1D95] md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                Esplora un mondo di oggetti unici, dalle antichità rare alle moderne collezioni.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#4C1D95] px-8 text-base font-semibold text-[#FFD54F] shadow-md transition-colors hover:bg-[#4C1D95]/90"
                >
                  Esplora le Aste
                </Link>
               
                <Button
                  onClick={() => setIsSellDialogOpen(true)}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#4C1D95] px-8 text-base font-semibold text-[#4C1D95] shadow-sm transition-colors hover:bg-[#4C1D95] hover:text-[#FFD54F] bg-transparent" // Aggiunto bg-transparent per coerenza con il design
                >
                  Vendi un Oggetto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Auctions Section - Innovative Layout */}
        <section className="w-full py-16 md:py-28 lg:py-20 bg-[#FFFCE0]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto items-start">
                {/* Main Featured Auction Card (Larger) */}
                <Card className="md:col-span-2 lg:col-span-2 bg-white text-card-foreground shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      width={800}
                      height={400}
                      alt="Opera d'Arte Rara"
                      className="object-cover w-full h-64 md:h-80 lg:h-96"
                    />
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <CardTitle className="text-2xl font-semibold text-[#4C1D95]">Opera d'Arte Moderna Rara</CardTitle>
                    <CardDescription className="text-base">
                      Un capolavoro unico di un artista emergente.
                    </CardDescription>
                    <div className="flex items-center justify-between text-base text-muted-foreground pt-2">
                      <span>
                        Offerta attuale: <span className="font-bold text-[#4C1D95] text-lg">€5.500</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#4C1D95]">
                        <Clock className="h-5 w-5" />
                        <span className="font-medium">3d 12h rimanenti</span>
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-base py-3">
                      Fai un'Offerta
                    </Button>
                  </CardFooter>
                </Card>

                {/* Smaller Auction Card 1 */}
                <Card className="bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      width={400}
                      height={250}
                      alt="Orologio Vintage"
                      className="object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <CardTitle className="text-xl font-semibold text-[#4C1D95]">Orologio da Tasca Vintage</CardTitle>
                    <CardDescription className="text-sm">Un pezzo di storia.</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                      <span>
                        Offerta: <span className="font-bold text-[#4C1D95] text-base">€250</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#4C1D95]">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">2h 30m</span>
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-sm py-2">
                      Fai un'Offerta
                    </Button>
                  </CardFooter>
                </Card>

                {/* Smaller Auction Card 2 */}
                <Card className="bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      width={400}
                      height={250}
                      alt="Vaso Antico"
                      className="object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <CardTitle className="text-xl font-semibold text-[#4C1D95]">Vaso Cinese Dinastia Ming</CardTitle>
                    <CardDescription className="text-sm">Raro e prezioso.</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                      <span>
                        Offerta: <span className="font-bold text-[#4C1D95] text-base">€1.200</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#4C1D95]">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">1d 10h</span>
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-sm py-2">
                      Fai un'Offerta
                    </Button>
                  </CardFooter>
                </Card>

                {/* Smaller Auction Card 3 */}
                <Card className="bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      width={400}
                      height={250}
                      alt="Moneta da Collezione"
                      className="object-cover w-full h-48"
                    />
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <CardTitle className="text-xl font-semibold text-[#4C1D95]">Moneta Romana Impero</CardTitle>
                    <CardDescription className="text-sm">Condizioni eccellenti.</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                      <span>
                        Offerta: <span className="font-bold text-[#4C1D95] text-base">€480</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#4C1D95]">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">5h 15m</span>
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-sm py-2">
                      Fai un'Offerta
                    </Button>
                  </CardFooter>
                </Card>

            <section className="bg-[#FFFCE0] border border-[#4C1D95]/10 text-[#4C1D95] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow hover:shadow-md transition-all duration-300">
  <div className="flex flex-col gap-2 text-center md:text-left">
    <h2 className="text-2xl font-bold">Hai oggetti da vendere?</h2>
    <p className="text-md text-[#4C1D95]/80 max-w-md">
      Metti all’asta i tuoi articoli e raggiungi centinaia di acquirenti interessati. Comincia oggi stesso!
    </p>
  </div>
  <Button
    variant="outline"
    className="border border-[#4C1D95] text-[#4C1D95] hover:bg-[#4C1D95] hover:text-[#FFD54F] bg-transparent text-base px-6 py-3 rounded-md transition-colors"
  >
    INIZIA A VENDERE
  </Button>
</section>


             


                
              </div>
              <Button
                variant="outline"
                className="mt-8 border border-[#4C1D95] text-[#4C1D95] hover:bg-[#4C1D95] hover:text-[#FFD54F] bg-transparent text-base px-6 py-2 rounded-md transition-colors"
              >
                Vedi Tutte le Aste
              </Button>
            </div>
          </div>
        </section>

        {/* New Section: More Auctions - Horizontal Scroll */}
        <section className="w-full py-16 md:py-28 lg:py-20 bg-[#FFFCE0]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4C1D95] text-balance">
                Altre Aste Interessanti
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                Non finire mai di scoprire! Ecco una selezione di altre aste che potrebbero piacerti.
              </p>
            </div>
            <div className="flex overflow-x-auto whitespace-nowrap py-4 scrollbar-hide gap-6">
              {/* Auction Card 1 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Fotocamera Vintage"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Fotocamera Vintage</CardTitle>
                  <CardDescription className="text-xs">Modello raro, funzionante.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€180</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">1h 45m</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 2 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Set di Francobolli"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Set di Francobolli Rari</CardTitle>
                  <CardDescription className="text-xs">Collezione completa.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€95</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">4h 00m</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 3 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Chitarra Acustica"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Chitarra Acustica Vintage</CardTitle>
                  <CardDescription className="text-xs">Suono caldo e ricco.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€320</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">6h 20m</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 4 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Collezione Fumetti"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Collezione Fumetti Anni '80</CardTitle>
                  <CardDescription className="text-xs">Numeri rari e prime edizioni.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€150</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">1d 05h</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 5 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Scacchiera Intarsiata"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Scacchiera Intarsiata</CardTitle>
                  <CardDescription className="text-xs">Artigianato di pregio.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€280</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">2d 00h</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 6 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Servizio da Tè Giapponese"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Servizio da Tè Giapponese</CardTitle>
                  <CardDescription className="text-xs">Porcellana fine, dipinto a mano.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€110</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">1d 18h</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 7 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Modellino Nave Antica"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Modellino Nave Antica</CardTitle>
                  <CardDescription className="text-xs">Dettagliato, fatto a mano.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€450</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">3d 05h</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>

              {/* Auction Card 8 */}
              <Card className="flex-shrink-0 w-[280px] bg-white text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden border border-[#4C1D95]/10">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=180&width=280"
                    width={280}
                    height={180}
                    alt="Vinile Raro"
                    className="object-cover w-full h-40"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <CardTitle className="text-lg font-semibold text-[#4C1D95]">Vinile Raro Edizione Limitata</CardTitle>
                  <CardDescription className="text-xs">Condizioni perfette.</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>
                      Offerta: <span className="font-bold text-[#4C1D95] text-sm">€75</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#4C1D95]">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">0h 50m</span>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90 text-xs py-1.5">
                    Fai un'Offerta
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* New Section: Most Visited Brands */}
        <section className="w-full py-16 md:py-28 lg:py-20 bg-[#FFFCE0]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4C1D95] text-balance">
                Marchi Più Visitati
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                Scopri gli oggetti dei marchi più ricercati e popolari sulla nostra piattaforma.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 justify-items-center">
              {/* Brand Logo 1 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+1"
                  width={80}
                  height={80}
                  alt="Brand Logo 1"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 1</span>
              </Link>
              {/* Brand Logo 2 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+2"
                  width={80}
                  height={80}
                  alt="Brand Logo 2"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 2</span>
              </Link>
              {/* Brand Logo 3 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+3"
                  width={80}
                  height={80}
                  alt="Brand Logo 3"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 3</span>
              </Link>
              {/* Brand Logo 4 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+4"
                  width={80}
                  height={80}
                  alt="Brand Logo 4"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 4</span>
              </Link>
              {/* Brand Logo 5 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+5"
                  width={80}
                  height={80}
                  alt="Brand Logo 5"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 5</span>
              </Link>
              {/* Brand Logo 6 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+6"
                  width={80}
                  height={80}
                  alt="Brand Logo 6"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 6</span>
              </Link>
              {/* Brand Logo 7 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+7"
                  width={80}
                  height={80}
                  alt="Brand Logo 7"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 7</span>
              </Link>
              {/* Brand Logo 8 */}
              <Link
                href="#"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#4C1D95]/5 transition-colors duration-200"
              >
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Brand+8"
                  width={80}
                  height={80}
                  alt="Brand Logo 8"
                  className="object-contain h-20 w-20"
                />
                <span className="text-sm font-medium text-[#4C1D95]">Brand 8</span>
              </Link>
            </div>
          </div>
        </section>


        {/* Call to Action Section - Prominent and inviting */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-[#FFFCE0] text-[#4C1D95]">
          <div className="container px-4 md:px-6 text-center mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                Pronto a Iniziare la Tua Avventura su Likan?
              </h2>
              <p className="mx-auto max-w-[700px] text-[#4C1D95] md:text-xl lg:text-lg xl:text-xl leading-relaxed">
                Unisciti alla nostra comunità di appassionati di aste. Che tu voglia comprare o vendere, Likan è il
                posto giusto.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center pt-8">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#4C1D95] px-8 text-base font-semibold text-[#FFD54F] shadow-md transition-colors hover:bg-[#4C1D95]/90"
                >
                  Registrati Ora
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#4C1D95] px-8 text-base font-semibold text-[#4C1D95] shadow-sm transition-colors hover:bg-[#4C1D95] hover:text-[#FFD54F]"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
         <SellItemDialog isOpen={isSellDialogOpen} onClose={() => setIsSellDialogOpen(false)} />

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
