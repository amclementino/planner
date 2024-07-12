import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

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
          <DestinationAndDateStep 
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsIpunt={openGuestsIpunt}
            closeGuestsIpunt={closeGuestsIpunt}
          />
        </div>

        {isGuestsInputOpen && (
          <InviteGuestsStep 
            openGuestsModal={openGuestsModal}
            openConfirmTripModal={openConfirmTripModal}
            emailsToInvite={emailsToInvite}
          />
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
