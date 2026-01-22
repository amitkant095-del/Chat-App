import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

const Homepage = () => {

  const {  selectedUser } = useContext(ChatContext);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  return (
    <div className='w-full h-screen px-0 sm:px-[5%] md:px-[10%] lg:px-[15%] py-0 sm:py-[2%] md:py-[5%]'>
    <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-none sm:rounded-2xl overflow-hidden h-[100%] grid relative ${selectedUser ? showRightSidebar ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}
     `}>
      <Sidebar  />
     <ChatContainer showRightSidebar={showRightSidebar} setShowRightSidebar={setShowRightSidebar} />
     {showRightSidebar && <RightSidebar  />}
     </div>
    </div>
  )
}

export default Homepage
