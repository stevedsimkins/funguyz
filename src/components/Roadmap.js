import styled from "styled-components"
import { motion } from "framer-motion"
import PhaseCard from "./PhaseCard"
import phase1Image from "../assets/phase1card.png"
import phase2Image from "../assets/phase2card.png"
import phase3Image from "../assets/phase3card.gif"
import phase4Image from "../assets/phase4card.png"

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <h1>Roadmap</h1>
      <RoadmapPhaseContainer>
        <PhaseCard phase="Phase 1" img={phase1Image} point1="Collabs and Partnerships" point2="Giveaways and WL Begin" point3="Launch on Magic Eden"  />
        <PhaseCard phase="Phase 2" img={phase2Image} point1="Open Staking Platform" point2="SolaLand Verification" point3="Aidrop FREE Fungies NFT" />
        <PhaseCard phase="Phase 3" img={phase3Image} point1="3D FunGuyz PFP Launch" point2="ShroomStead Development" point3="Launch FUN Store"/>
        <PhaseCard phase="Phase 4" img={phase4Image} point1="ShroomSteads Launch" point2="Begin FunForest Metaverse" point3="Full Body 3D Avatars"/>
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
`
const RoadmapPhaseContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
  width: 100%;
  height: 100%;
  grid-gap: 5rem;
`

export default Roadmap;

