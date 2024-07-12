import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean,
    closeGuestsIpunt: () => void,
    openGuestsIpunt: () => void
}


export function DestinationAndDateStep(
    {
        isGuestsInputOpen,
        closeGuestsIpunt,
        openGuestsIpunt

    }: DestinationAndDateStepProps){
    
    return (
        <div className="h-16 bg-zinc-800 px-4 rounded-xl flex items-center shadow-md gap-3">
                
            <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} className="bg-transparent placeholder-zinc-400 tex-lg outline-none flex-1" type="text" placeholder="Para onde você vai?" />
            </div>
            
            <div className="flex items-center gap-2 ">
            <Calendar className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} className="bg-transparent placeholder-zinc-400 tex-lg w-40 outline-none" type="text" placeholder="Quando?" />
            </div>

            <div className="w-px h-6 bg-zinc-600" />
                {isGuestsInputOpen ? (
                <button onClick={closeGuestsIpunt} className="bg-zinc-700 text-zinc-300 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-500 ">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </button>
            ) : (
                <button onClick={openGuestsIpunt} className="bg-orange-300 text-orange-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-orange-400 ">
                    Continuar
                    <ArrowRight className="size-5" />
                </button>
            )}   
        </div>

    )
}