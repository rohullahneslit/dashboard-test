import {Header, Sidebar} from '../../components'
import {Outlet} from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex  mx-6 mt-10 gap-3">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
