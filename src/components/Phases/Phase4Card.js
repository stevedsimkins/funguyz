import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import phase4Image from "../../assets/phase4card.png"
import phase4Poster from "../../assets/phase4Poster.png"


const PhaseCard = () => {
  
  const [showPhase,setShowPhase] = useState(false)

  const openModal = () => {
    setShowPhase(true)
  }

  return (
    <PhaseCardContainer>
    {showPhase ? <Modal setShowPhase={setShowPhase} showPhase={showPhase} /> : null}
      <h2>Phase 4</h2>
      <PhaseCardInner>
        <PhaseImg>
          <img src={phase4Image} alt="Phase 4 FunGuy" />
        </PhaseImg>
        <PhaseList>
          <ul>
            <li><h4>ShroomSteads Launch</h4></li>
            <li><h4>Begin FunForest Metaverse</h4></li>
            <li><h4>Full Body 3D Avatars</h4></li>
          </ul>
        </PhaseList>
        <ExpandButton onClick={openModal}><h5 className="gradientText">More Details</h5></ExpandButton>
      </PhaseCardInner>
    </PhaseCardContainer>
  )
}

const Modal = ({ setShowPhase }) => {

  const closeModal = () => {
    setShowPhase(false)
  }

  return (
    <ModalContainer>
      <ModalMain src={phase4Poster} alt="Phase 4 Roadmap Poster" />
      <CloseButton onClick={closeModal}><h5 className="gradientText">Close</h5></CloseButton>
    </ModalContainer>
  )
}

const PhaseCardContainer = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  @media screen and (max-width: 500px){
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
`

const PhaseCardInner = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    border: 4px solid transparent;
    background: linear-gradient(152deg, red, orange, yellow, green, blue, purple) border-box;
    -webkit-mask: /*4*/
       linear-gradient(#fff 0 0) padding-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /*5'*/
            mask-composite: exclude; /*5*/
  }
`
const PhaseImg = styled(motion.div)`
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: 350px;
    object-fit: cover;
    margin-top: 3rem;
    border-radius: 30px;
  }
  @media screen and (max-width: 500px){
    img {
      width: 90%;
    }
  }

`

const PhaseList = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ul {
    list-style: none;
  }
  li {
    padding: 1rem 0rem 0rem 2rem;
    padding-left: 2rem;
    text-indent: -0.75rem;
  }
  h4:before {
    content: ' 🍄 '
  }
  @media screen and (max-width: 500px){
    h4 {
      font-size: 21px;
    }
  }

`

const ExpandButton = styled.button`
  background: white;
  border: none;
  border-radius: 30px;
  margin: 1rem 0rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  z-index: 2;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 10;
`

const ModalMain = styled(motion.img)`
  position: fixed;
  width: auto;
  height: 90%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  @media screen and (max-width: 700px){
    width: 90%;
    height: auto;
  }

`

const CloseButton = styled.button`
  bottom: 0;
  left: 50%;
  transform: translate(0%, -50%);
  z-index: 12;
  background: white;
  border: none;
  border-radius: 30px;
  margin: 1rem auto;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
`

export default PhaseCard;
