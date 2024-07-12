import { X, UserRound, Mail } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void,
    createTrip: (event: FormEvent<HTMLFormElement>) => void

}

export function ConfirmTripModal(
    {
        closeConfirmTripModal,
        createTrip

    }: ConfirmTripModalProps){
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl px-6 py-5 shadow-md bg-zinc-800 space-y-5">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirmar Criação de Viagem</h2>
                <button type="button" onClick={closeConfirmTripModal}> 
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <p className="tex-sm text-zinc-400">
                Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil </span>
                nas datas de <span className="font-semibold text-zinc-100">16 à 27 de Agosto de 2024 </span> preencha seus dados abaixo:
              </p>
            </div>

            <form onSubmit={createTrip} className="space-y-3">
              <div className="py-2.5 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2">
              
                <UserRound className="text-zinc-400 size-5" />   
                <input type="text" name="name" placeholder="Seu nome completo" 
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              
              <div className="h-14 px-4 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-2">
              
                <Mail className="text-zinc-400 size-5" />   
                <input type="email" name="email" placeholder="Seu nome completo" 
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button type="submit" className="bg-orange-300 w-full text-orange-950 rounded-lg px-5 h-11 font-medium 
                flex items-center justify-center gap-2 hover:bg-orange-400 ">
                Confirmar Criação da Viagem
              </button>
            </form>

          </div>
        </div>
    )
}