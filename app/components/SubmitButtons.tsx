'use client'

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButtons() {
  const { pending } = useFormStatus()
  return (
    <>
    {pending ? (
      <Button disabled className='w-fit'>
        <Loader2 className='mr-2 w-4 h-4 animate-spin' />
          Please Wait
      </Button>
    ) : (
      <Button className='w-fit' type='submit'>
        Save Now
      </Button>
    )}
    </>
  )
}

export function StripeSubscriptionCreationButton() {
  const {pending} = useFormStatus()
  return (
    <>
    {pending ? (
      <Button disabled className='w-full'>
        <Loader2 className='mr-2 w-4 h-4 animate-spin' />
        Please Wait
      </Button>
    ) : (
      <Button type='submit' className='w-full'>Create Subscription</Button>
    )}
    </>
  )
}

export function StripePortal() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled className='w-fit'>
          <Loader2 className='mr-2 w-4 h-4 animate-spin' />
          Please Wait
        </Button>
      ) : (
        <Button className='w-fit' type='submit'>
          View payment details
        </Button>
      )}
    </>
  )
}