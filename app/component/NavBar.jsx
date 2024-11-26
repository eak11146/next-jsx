 import { Languages } from "lucide-react"
import Link from "next/link"


const NavBar = () => {
  return (
    <>
    <nav className='bg-black justify-around'>
        <ul className='nav-me'>
            <li><Link href='/'>Home</Link></li>
            <li>About</li>
            <li>Gellry</li>
            <li><Link href='languages'>languages</Link></li>
            <li>Contact</li>
        </ul>
    </nav>
      
    </>
  )
}

export default NavBar
