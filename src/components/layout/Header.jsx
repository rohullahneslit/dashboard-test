import {Icon, Text} from '../index'
import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useOnClickOutside} from '../../hooks/useOnClickOutside'

const navItems2 = [
  {id: 1, name: 'Profile', icon: 'profile', href: '/settings'},
  {id: 2, name: 'Settings', icon: 'settings', href: '/profiles'},
]

const Header = () => {
  const [toggleProfile, setToggleProfile] = useState(false)

  const ref = useRef()
  useOnClickOutside(ref, () => setToggleProfile(false))

  return (
    <>
      {/* Header Start */}
      <div className="flex justify-between bg-white p-4 m-6 rounded-2xl shadow-xl shadow relative">
        <div className="flex items-center justify-center gap-6 ">
          <div className="border-r-[1px] border-r-border pr-5">
            <Icon src="logo" width={150} height={150}></Icon>
          </div>
          <div className="">
            <Text variant="blueheading" text="Dashboard" className="hidden lg:flex" />
          </div>
          <div className="border-2 border-border rounded-xl lg:flex hidden p-2  items-center justify-center gap-2 ">
            <Icon src="search" width={20} height={20} />
            <input className="outline-0" placeholder="Search" />
          </div>
        </div>
        <div
          className="flex gap-8 items-center justify-center
        "
        >
          <div className="text-gray hidden lg:flex">8 Jul, 2022</div>
          <div className="relative">
            <div className="bg-red-600 p-1 absolute top-0 right-0  rounded-full"></div>
            <Icon src="notification" width={20} height={20} className="cursor-pointer" />
          </div>
          <div
            className="flex gap-3 items-center justify-center cursor-pointer"
            onClick={() => setToggleProfile(!toggleProfile)}
            ref={ref}
          >
            <Icon src="avatar" width={50} height={50} />
            <Text variant="blackheading" text="Ahmed" />
            <Icon src="downarrow" width={20} height={20} />
          </div>
          {toggleProfile && (
            <div className="rounded-2xl z-10 py-2 px-4 bg-white absolute lg:top-[5.5rem] top-[4rem] right-0 shadow-xl">
              {navItems2.map(item => (
                <Link to={item.href}>
                  <div key={item.id} className="flex my-2  gap-2 cursor-pointer  ">
                    <Icon src={item.icon} width={20} height={20} />
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Header End */}
    </>
  )
}

export default Header
