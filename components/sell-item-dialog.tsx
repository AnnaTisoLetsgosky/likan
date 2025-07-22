"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast" // Assumendo che tu abbia use-toast

interface SellItemDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function SellItemDialog({ isOpen, onClose }: SellItemDialogProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    zip: "",
    province: "",
    country: "",
  })
  const [itemDetailsData, setItemDetailsData] = useState({
    name: "",
    description: "",
    category: "",
  })
  // Aggiungi altri stati per le fasi successive se necessario

  const totalSteps = 4 // Esempio: Indirizzo, Dettagli Oggetto, Immagini, Prezzo e Durata

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setAddressData((prev) => ({ ...prev, [id]: value }))
  }

  const validateAddressStep = () => {
    const { street, city, zip, province, country } = addressData
    if (!street || !city || !zip || !province || !country) {
      toast({
        title: "Errore di validazione",
        description: "Per favore, compila tutti i campi dell'indirizzo.",
        variant: "destructive",
      })
      return false
    }
    return true
  }

  const handleNext = () => {
    if (currentStep === 1) {
      if (!validateAddressStep()) {
        return
      }
      // Qui potresti inviare i dati dell'indirizzo a un backend
      console.log("Dati indirizzo validati:", addressData)
    }
    // Aggiungi logica di validazione per altre fasi qui
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    // Logica finale di invio dell'inserzione
    console.log("Inserzione completata!", { addressData, itemDetailsData })
    toast({
      title: "Successo!",
      description: "La tua inserzione è stata creata con successo.",
    })
    onClose()
    setCurrentStep(1) // Reset per la prossima volta
    setAddressData({ street: "", city: "", zip: "", province: "", country: "" })
    setItemDetailsData({ name: "", description: "", category: "" })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4C1D95]">Indirizzo di Spedizione</h3>
            <p className="text-sm text-muted-foreground">Inserisci l'indirizzo da cui verrà spedito l'oggetto.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="street" className="text-[#4C1D95]">
                  Via e Numero Civico
                </Label>
                <Input
                  id="street"
                  value={addressData.street}
                  onChange={handleAddressChange}
                  placeholder="Es. Via Roma 10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-[#4C1D95]">
                  Città
                </Label>
                <Input id="city" value={addressData.city} onChange={handleAddressChange} placeholder="Es. Milano" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-[#4C1D95]">
                  CAP
                </Label>
                <Input id="zip" value={addressData.zip} onChange={handleAddressChange} placeholder="Es. 20100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="province" className="text-[#4C1D95]">
                  Provincia
                </Label>
                <Input id="province" value={addressData.province} onChange={handleAddressChange} placeholder="Es. MI" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="country" className="text-[#4C1D95]">
                  Nazione
                </Label>
                <Input
                  id="country"
                  value={addressData.country}
                  onChange={handleAddressChange}
                  placeholder="Es. Italia"
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4C1D95]">Dettagli dell'Oggetto</h3>
            <p className="text-sm text-muted-foreground">
              Fornisci informazioni dettagliate sull'oggetto che vuoi vendere.
            </p>
            <div className="space-y-2">
              <Label htmlFor="itemName" className="text-[#4C1D95]">
                Nome Oggetto
              </Label>
              <Input
                id="itemName"
                value={itemDetailsData.name}
                onChange={(e) => setItemDetailsData({ ...itemDetailsData, name: e.target.value })}
                placeholder="Es. Orologio da collezione"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="itemDescription" className="text-[#4C1D95]">
                Descrizione
              </Label>
              <Input
                id="itemDescription"
                value={itemDetailsData.description}
                onChange={(e) => setItemDetailsData({ ...itemDetailsData, description: e.target.value })}
                placeholder="Descrivi l'oggetto in dettaglio"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="itemCategory" className="text-[#4C1D95]">
                Categoria
              </Label>
              <Input
                id="itemCategory"
                value={itemDetailsData.category}
                onChange={(e) => setItemDetailsData({ ...itemDetailsData, category: e.target.value })}
                placeholder="Es. Orologi, Arte, Elettronica"
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4C1D95]">Carica Immagini</h3>
            <p className="text-sm text-muted-foreground">Aggiungi foto chiare e di alta qualità del tuo oggetto.</p>
            <div className="flex items-center justify-center h-48 border-2 border-dashed border-[#4C1D95]/30 rounded-md text-[#4C1D95]/60">
              Trascina e rilascia le immagini qui o clicca per caricare
            </div>
            <Button
              variant="outline"
              className="w-full border-[#4C1D95] text-[#4C1D95] hover:bg-[#4C1D95] hover:text-[#FFD54F] bg-transparent"
            >
              Carica Immagini
            </Button>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4C1D95]">Prezzo e Durata Asta</h3>
            <p className="text-sm text-muted-foreground">Imposta il prezzo di partenza e la durata della tua asta.</p>
            <div className="space-y-2">
              <Label htmlFor="startingPrice" className="text-[#4C1D95]">
                Prezzo di Partenza (€)
              </Label>
              <Input id="startingPrice" type="number" placeholder="Es. 100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auctionDuration" className="text-[#4C1D95]">
                Durata Asta (Giorni)
              </Label>
              <Input id="auctionDuration" type="number" placeholder="Es. 7" />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
          setCurrentStep(1) // Reset step when dialog closes
          setAddressData({ street: "", city: "", zip: "", province: "", country: "" })
          setItemDetailsData({ name: "", description: "", category: "" })
        }
      }}
    >
      <DialogContent className="sm:max-w-[600px] bg-[#FFFCE0] text-[#4C1D95] border border-[#4C1D95]/10">
        <DialogHeader>
          <DialogTitle className="text-[#4C1D95]">
            Vendi un Oggetto - Fase {currentStep} di {totalSteps}
          </DialogTitle>
          <DialogDescription className="text-[#4C1D95]/80">
            Segui i passaggi per creare la tua inserzione.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">{renderStepContent()}</div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="border-[#4C1D95] text-[#4C1D95] hover:bg-[#4C1D95] hover:text-[#FFD54F] bg-transparent"
            >
              Indietro
            </Button>
          )}
          <div className="flex gap-2 sm:ml-auto">
            {currentStep < totalSteps && (
              <Button onClick={handleNext} className="bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90">
                Avanti
              </Button>
            )}
            {currentStep === totalSteps && (
              <Button onClick={handleSubmit} className="bg-[#4C1D95] text-[#FFD54F] hover:bg-[#4C1D95]/90">
                Crea Inserzione
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
