/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import useAuth from '../../data/hook/UserAuth'

interface AvatarProps {
    className?: string
}

export default function Avatar(props: AvatarProps){

    const { user } = useAuth()

    return (
        <Link href='/profile'>
            <img 
                src={ user?.photoUrl ?? '/images/avatarDefault.svg'}
                alt="User Avatar Image" 
                className={`
                    w-10 h-10 rounded-full cursor-pointer
                    ${ props.className }
                `}
            />
        </Link>
    )
}