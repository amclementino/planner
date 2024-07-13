import { Calendar, CircleCheck, Link2, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetails(){
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
    
            <div className="px-4 h-16 rounded-xl bg-zinc-800 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400"/>
                    <span className="text-zinc-100">Florianópolis, Brasil</span>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">17 a 23 de Agosto</span>
                    </div>
                
                    <div className="w-px h-6 bg-zinc-600" />

                    <button className="bg-zinc-700 text-zinc-300 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-500 ">
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </button>
                </div>
            </div> 

            <main className="flex gap-16">

                <div className="flex-1 space-y-6 px-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button className="bg-orange-300 text-orange-950 rounded-lg px-5 py-2 font-medium 
                            flex items-center gap-2 hover:bg-orange-400 ">
                            <Plus className="size-5" />
                            Cadastrar Atividade
                        </button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-xs text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
                        </div>
                        
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                            
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-800 rounded-xl shadow-md flex items-center gap-3">
                                    <CircleCheck className="size-5 text-orange-400"/>
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-sm text-zinc-400 ml-auto">08:00h</span>
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-800 rounded-xl shadow-md flex items-center gap-3">
                                    <CircleCheck className="size-5 text-orange-400"/>
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-sm text-zinc-400 ml-auto">08:00h</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="w-80 space-y-6">
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Links Importantes</h2>

                        <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-300">Reserva do AirBnB</span>
                                <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-300 truncate">
                                    https://www.airbnb.com.br/rooms/12314562451151651651
                                </a>
                            </div>
                            <Link2 className="text-zinc-400 size-5 shrink-0"/>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-300">Reserva do AirBnB</span>
                                <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-300 truncate">
                                    https://www.airbnb.com.br/rooms/12314562451151651651
                                </a>
                            </div>
                            <Link2 className="text-zinc-400 size-5 shrink-0"/>
                        </div>

                        <button className="bg-zinc-700 w-full text-zinc-300 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-500 ">
                            <Plus className="size-5" />
                            Cadastrar Novo Link
                        </button>
                    </div>
                    <div className="w-full h-px bg-zinc-600" />
                    <div></div>
                </div>

            </main>

        </div>    
    )
}