import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Feed from '../components/Feed/Feed'
import Modal from '../components/Modal/Modal'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import StoryModal from '../components/Modal/StoryModal'
import StoryPopupModal from '../components/Modal/StoryPopupModal'
import CustomizeModal from '../components/Modal/CustomizeModal'
import FollowModal from '../components/Modal/FollowModal'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'
import ShareModal from '../components/Modal/ShareModal'
import Sidebar from '../components/Common/Sidebar'
import CommentModal from '../components/Modal/CommentModal'


function Home() {
  const [ID, setID] = useState([])

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'stories')),
        snapshot => {
          setID(snapshot.docs)
        }
      ),
    [db]
  );
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide bg-gray-100">
      <Head>
        <title>Home | HexaGon</title>
      </Head>
      
        <Header />

      <StoryModal />
      <CustomizeModal/>
      <ShareModal/>
      <CommentModal/>
      <Modal />
      <StoryPopupModal/>
       
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Feed />
    </div>
  )
}

export default Home