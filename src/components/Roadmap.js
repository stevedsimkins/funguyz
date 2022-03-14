import styled from "styled-components"
import { motion } from "framer-motion"
import Phase1Card from "./Phases/Phase1Card"
import Phase2Card from "./Phases/Phase2Card"
import Phase3Card from "./Phases/Phase3Card"
import Phase4Card from "./Phases/Phase4Card"


const Roadmap = () => {
  return (
    <RoadmapContainer>
      <h1 style={{color: "white"}}>Roadmap</h1>
      <RoadmapPhaseContainer>
        <Phase1Card />
        <Phase2Card />
        <Phase3Card />
        <Phase4Card />
      </RoadmapPhaseContainer>
    </RoadmapContainer>
  )
}

const RoadmapContainer = styled(motion.div)`
  min-height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-top: 3rem;
  }
  @media screen and (max-width: 500px){
  width: 100%;
}
`
const RoadmapPhaseContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr)); 
  width: 100%;
  height: 100%;
  grid-gap: 5rem;
  @media screen and (max-width: 1200px){
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media screen and (max-width: 400px){
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

export default Roadmap;

