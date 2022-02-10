import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import phase3Image from "../../assets/phase3card.gif"
import phase3Poster from "../../assets/phase3Poster.png"


const PhaseCard = () => {
  
  const [showPhase,setShowPhase] = useState(false)

  return (
    <PhaseCardContainer>
    {showPhase ? <Modal /> : null}
      <h2>Phase 1</h2>
      <PhaseCardInner>
        <PhaseImg>
          <img src={phase3Image} alt="Phase 3 FunGuy" />
        </PhaseImg>
        <PhaseList>
          <ul>
            <li><h4>3D FunGuyz PFP Launch</h4></li>
            <li><h4>ShroomStead Development</h4></li>
            <li><h4>Launch FUN Store</h4></li>
          </ul>
        </PhaseList>
        <ExpandButton onClick={()=> setShowPhase(true)}><h5 className="gradientText">More Details</h5></ExpandButton>
      </PhaseCardInner>
    </PhaseCardContainer>
  )
}

const Modal = () => {
  return (
    <ModalContainer>
      <ModalMain src={phase3Poster} alt="Phase 3 Roadmap Poster" />
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
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`

export default PhaseCard;
