import styled from 'styled-components'
import { motion } from 'framer-motion'
import aboutHero from '../assets/aboutHero.png'
import { fade } from "../animations"

const About = () => {
  return (
    <AboutContainer >
      <AboutHero src={aboutHero} alt='About Hero Image' />
      <AboutCopy>
        <AboutBlurb1>
          <h2>What Are FunGuyz?</h2>
          <h5>
            Fun Guyz is a collection of 3,000 hand-drawn mushroom characters
            born on the Solana blockchain.
          </h5>
        </AboutBlurb1>
        <AboutBlurb2>
          <h2>How much are they?</h2>
          <h5>TBD!</h5>
        </AboutBlurb2>
        <AboutBlurb3>
          <h2>Wen Mint?</h2>
          <h5>Fun Fam membership begins Q1 2022</h5>
        </AboutBlurb3>
        <AboutBlurb4>
          <h2>FunGuyz Benefits</h2>
          <h5>
            Well, you could enjoy all the unique benefits of holding Fun Guyz
            such as...
          </h5>
          <br />
          <ul>
            <li>
              <h5>Special airdrops</h5>
            </li>
            <li>
              <h5>VIP access to future projects</h5>
            </li>
            <li>
              <h5>
                Chance at a 1/1 3D avatar of your Fun Guy (only available by
                minting / holding OG FunGuyz)
              </h5>
            </li>
            <li>
              <h5>Exclusive merch and much more</h5>
            </li>
          </ul>
          <br />
          <h5>
            PLUS you could help a high-school teacher prove to his art students
            that it’s possible to chase your dreams and launch a successful NFT
            collection.
          </h5>
        </AboutBlurb4>
      </AboutCopy>
    </AboutContainer>
  )
}

const AboutContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`

const AboutHero = styled(motion.img)`
  width: 60%;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`

const AboutCopy = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 3rem;
  @media screen and (max-width: 1000px) {
    max-width: 90%;
  }
  padding-right: 2rem;
`

const AboutBlurb1 = styled(motion.div)``
const AboutBlurb2 = styled(motion.div)`
`
const AboutBlurb3 = styled(motion.div)`
`
const AboutBlurb4 = styled(motion.div)`
  ul {
    padding-left: 3rem;
  }
`

export default About
