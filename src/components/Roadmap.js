import styled from "styled-components"
import { motion } from "framer-motion"

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <h1>Roadmap</h1>
      <RoadmapPhaseContainer>
        <h2>Card 1</h2>
        <h2>Card 2</h2>
        <h2>Card 3</h2>
        <h2>Card 4</h2>
      </RoadmapPhaseContainer>
    </RoadmapContainer>
  )
}

const RoadmapContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const RoadmapPhaseContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  width: 100%;
  height: 100%;
`

export default Roadmap;

