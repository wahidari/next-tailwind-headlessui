import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Button from '@components/Button'
import Heading from '@components/Heading'

export default function MyModal({ modalTitle, children, isOpenModal, onCloseModal, onConfirmModal, danger }) {

  return (
    <>
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onCloseModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-neutral-900 shadow-xl rounded-2xl">
                <Heading.h3>{modalTitle}</Heading.h3>
                <div className="mt-2">
                  {children}
                </div>
                <div className="mt-4 gap-2 flex">
                  <Button.secondary onClick={onCloseModal}>Cancel</Button.secondary>
                  {danger ?
                    <Button.red onClick={onConfirmModal}>Delete</Button.red>
                    :
                    <Button onClick={onConfirmModal}>Confirm</Button>
                  }
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}