import {Link} from 'react-router-dom'
import {Icon} from '../index'
import {useState} from 'react'

const navItems = [
  {id: 1, name: 'DashBoard', icon: 'dashboard', href: '/'},
  {id: 5, name: 'Customer', icon: 'customer', href: '/customer'},
  {id: 2, name: 'Cart', icon: 'cart', href: '/cart'},
  {id: 3, name: 'Product', icon: 'product', href: '/products'},
  {id: 4, name: 'Analytics', icon: 'analytics', href: '/analytics'},
]

const navItems2 = [
  {id: 1, name: 'Profile', icon: 'profile', href: '/settings'},
  {id: 2, name: 'Settings', icon: 'settings', href: '/profiles'},
]

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true)

  return (
    <>
      <div
        className="absolute left-0 top-[5.5rem] lg:hidden bg-gray p-2 rounded-tr-2xl rounded-br-2xl"
        onClick={() => {
          setToggleSidebar(!toggleSidebar)
        }}
      >
        <Icon src="arrowleft" width={20} height={20} />
      </div>
      <div
        className={`${
          toggleSidebar ? 'lg:w-2/12 flex flex-col gap-4 ' : 'flex flex-col gap-4 hidden'
        }`}
      >
        {navItems.map(item => (
          <Link to={item.href}>
            <div
              key={item.id}
              className="flex  gap-2  cursor-pointer rounded-3xl py-4 px-6 hover:bg-white hover:shadow  transition-colors duration-200"
            >
              <Icon src={item.icon} width={25} height={25} className="lg:w-auto w-10" />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
        <div className="border-b-border border-b-2 border-dashed "> </div>
        {navItems2.map(item => (
          <Link to={item.href}>
            <div
              key={item.id}
              className="flex  gap-2  cursor-pointer rounded-3xl py-4 px-6 hover:bg-white hover:shadow transition-colors duration-200"
            >
              <Icon src={item.icon} width={25} height={25} />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Sidebar
