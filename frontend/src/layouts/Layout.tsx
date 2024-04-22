import Header from '@/components/Header'
import { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout