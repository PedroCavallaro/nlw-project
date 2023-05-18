import { getUser } from '../lib/auth'
import Image from 'next/image'
export function Profile() {
  const { name, avatar } = getUser()

  return (
    <>
      <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />
      <div className="flex items-center gap-3 text-left">
        <Image
          src={avatar}
          width={40}
          height={40}
          alt=""
          className="h-10 w-10 rounded-full"
        ></Image>
        <p className="max-w-[140px] text-sm leading-snug">
          {name}
          <a href="" className="block text-red-400 hover:text-red-300">
            Quero sair
          </a>
        </p>
      </div>
    </>
  )
}
