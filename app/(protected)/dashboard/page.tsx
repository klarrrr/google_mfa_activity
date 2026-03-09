import NavBar from '@/components/NavBar'
import WelcomeUser from '@/components/WelcomeUser'
import { Suspense } from 'react'

const page = async () => {
    return (
        <div className='flex flex-col gap-4'>
            <NavBar />
            <Suspense>
                <WelcomeUser email='' />
            </Suspense>
        </div>
    )
}

export default page
