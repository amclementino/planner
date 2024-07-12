import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';

export function CreateTrip() {

  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState(['exemple@email.com'])


  function openGuestsIpunt(){
    setIsGuestsInputOpen(true)
  }

  function closeGuestsIpunt(){
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email

    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailsToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailsToRemove)
    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    navigate('/trips/1')
  }

  return (
    <div className="h-screen flex items-center justify-center">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div>
          <p className="text-7xl ">Planner</p>
          <br />
          <p className="text-zinc-300 text-lg"> Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
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
        </div>

        {isGuestsInputOpen && (

          <div className="h-16 bg-zinc-800 px-4 rounded-xl flex items-center shadow-md gap-3">
          
            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400" />
              {emailsToInvite.length > 0 ? (
                <span className="text-zinc-100 text-lg flex-1 text-left"> {emailsToInvite.length} pessoa(s) convidada(s)</span>
              ) : (
                <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
              )}
                            
            </button>
          
            <div className="w-px h-6 bg-zinc-600" />

            <button onClick={openConfirmTripModal} className="bg-orange-300 text-orange-950 rounded-lg px-5 py-2 font-medium 
              flex items-center gap-2 hover:bg-orange-400 ">
              Confrimar viagem
              <ArrowRight className="size-5" />
            </button>
          </div>
        )}


        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela Planner você automaticamnte concorda com nossos<br/> 
          <a href="#">termos de uso</a> e <a href="#">políticas de provacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal 
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            closeGuestsModal={closeGuestsModal}
            removeEmailFromInvites={removeEmailFromInvites}   
        />
      )}

      {isConfirmTripModalOpen &&(
        < ConfirmTripModal 
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />

      )}

    </div>
  )
}
