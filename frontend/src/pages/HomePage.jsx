import React from 'react'
import { useChatStore } from '../store/useChatStore'
import Sidebar from '../components/Sidebar';
import NoChatSelected from '../components/NoChatSelected';
import ChatContainer from '../components/ChatContainer';

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="min-h-screen bg-base-200 bg-gradient-to-br 
  from-white/10 
  via-white/20 
  to-gray-400/30 
  backdrop-blur-md
  border border-white/10">
      <div className="flex items-center justify-center pt-24  px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage