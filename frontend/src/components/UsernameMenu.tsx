import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const UsernameMenu = () => {
    const { user } = useAuth0()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className='flex items-center px-3 font-bold hover:text-orange-500 gap-2'
            >
                <CircleUserRound className='text-orange-500' />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Link to='/user-profile' className='font-bold hover:text-orange-500'>
                    User Profile
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu