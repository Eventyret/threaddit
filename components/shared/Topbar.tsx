import Link from 'next/link'
import Image from 'next/image'

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href="/" className='flex items-center gap-4'>
        <Image src='/logo.svg' width={28} height={28} alt="Threaddit Logo" />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threaddit</p>
      </Link>
    </nav>
  )
}
export default Topbar