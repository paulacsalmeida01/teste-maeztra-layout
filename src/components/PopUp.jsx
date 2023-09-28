import '../styles/css/PopUp.css'
import React, {useEffect} from 'react'
import img from '../assets/modal.png'
import img2 from '../assets/o-email.png'

const PopUp = () => {
    const closModal = () => {
        document.querySelector('.bg-modal.active').classList.remove('active')
        document.querySelector('.content-modal.active').classList.remove('active')
        document.querySelector('body').classList.remove('active')
    }

    useEffect(() => {
      setTimeout(() => {
        document.querySelector('.bg-modal').classList.add('active')
        document.querySelector('.content-modal').classList.add('active')
        document.querySelector('body').classList.add('active')
      }, 4000);
    },[])

    return (
        <>
            <div className='bg-modal'></div>
            <div className='content-modal'>
                <img className='banner-modal' src={img} />
                <div>
                    <span onClick={() => closModal()}>Fechar</span>
                    <img src={img2} />
                    <p>Bem Vindo à MAEZTRA</p>
                    <h4>Receba em Primeira mão desconto e ofertas exclusivas</h4>
                    <input placeholder='Digite seu e-mail' />
                    <label>Enviar</label>
                </div>
            </div>
        </>
    )
}

export default PopUp;