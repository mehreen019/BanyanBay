import React from 'react'
import wechat from '../assets/wechat.jpg';
import '../styles/PopUp.css';
import  { useModal } from '../Provider/ModalProvider.tsx';

const PopUp = () => {
    const { closeModal } = useModal();

  return (
    <div className="popup-container">
        <button className='cross' onClick={() => closeModal()}>X</button>
        <p className='title'>WeChat ID: bbaytravel</p>
        <img src={wechat} width={350} height={450} alt="QR Code" />
    </div>
  )
}

export default PopUp