import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href="/" className='flex items-center gap-4'>
        <Image src='/logo.svg' width={28} height={28} alt="Threaddit Logo" />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threaddit</p>
      </Link>
      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image src='/logout.svg' width={24} height={24} alt="Logout" />
              </div>
            </SignOutButton>
          </SignedIn>

        </div>
        <OrganizationSwitcher appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4"
          }
        }} />
      </div>
    </nav>
  )
}
export default Topbar