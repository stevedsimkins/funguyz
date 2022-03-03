import styled from 'styled-components'
import { motion } from 'framer-motion'
import anky from "../assets/anky.png"
import jurd from "../assets/jurd.png"
import erasio from "../assets/erasio.png"

const Creators = () => {
  return (
    <CreatorsContainer>
      <h1>The Creators</h1>
      <CreatorCard>
        <CreatorImage src={anky} alt='Anky Bio Image' />
        <CreatorCopy>
          <h4>@Crypto Anky | Anthony - <br/> Creator & Lead Artist</h4>
          <p>For over 20 years, Anthony has been creating art. Constantly exploring new skills and mediums, he has tackled: drawing, painting, graphic design, sculpture, woodworking, furniture building, ceramics, band/tour merchandising, and much more.</p>
          <br/>
          <p>As a high-school art / special education teacher, Anthony has taught thousands of students over the last decade. He also works as a youth mentor, guiding dozens of at-risk teens, while helping them meet their personal goals. A proud husband and father of three fungies, Anthony loves the family life. When he isn't in the classroom or creating, he's adventuring and making memories with the fam.</p>
          <br/>
          <p>Jurd, his old college roommate and best friend, turned him onto NFTs last year. The rest, as they say, is history.</p>
        </CreatorCopy>
      </CreatorCard>

      <CreatorCard>
        <CreatorImage src={jurd} alt='Jurd Bio Image' />
        <CreatorCopy>
          <h4>@JURD | Jared - <br/> Co-Creator & Master Visionary</h4>
          <p>Jared is an eBay master, crypto enthusiast, husband, and soon-to-be first-time father. He has worked in the world of eBay for over 12 years and currently runs the eBay division for an electronics recycler in Colorado.</p>
          <br/>
          <p>During his free time, Jared likes to spend time with his wife, stare at charts, go hiking in the Colorado mountains, fly fish as much as possible, play disc golf, collect military memorabilia, and go thrifting for treasures to feed his eBay addiction.</p>
          <br/>
          <p>Anthony and Jared met back in college over ten years ago and have been friends ever since, with this world of NFTs bringing them closer together to create FunGuyz!</p>
        </CreatorCopy>
      </CreatorCard>

      <CreatorCard>
        <CreatorImage src={erasio} alt='Erasio Bio Image' />
        <CreatorCopy>
          <h4>@Erasio | Robert - <br/> Community Manager & Problem Solver</h4>
          <p>Robert (or Rob) was born and raised on the east coast of the US. He’s a social media engagement specialist by day and a community manager by night. He’s a gamer, writer, crypto enthusiast, and anime nerd.  You can find him at the rock climbing gym or on his Nintendo switch playing Smash Bros.</p>
          <br/>
          <p>Rob started his crypto journey in 2020 after being convinced of the positive impact that decentralization can have on the global financial system. He is obsessed with blockchain technology, and the constant innovation it brings. After learning about NFTs and how they have the potential to change digital ownership forever, he dove headlong into the NFT space.</p>
        </CreatorCopy>
      </CreatorCard>
    </CreatorsContainer>
  )
}

const CreatorsContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  h1 {
    color: white;
    padding-top: 5rem;
}
`
const CreatorCard = styled(motion.div)`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  border: 10px solid #6687E7;
  border-radius: 15px;
  background: white;
  padding: 2rem;
  @media screen and (max-width: 1100px){
    flex-direction: column;
  }
`
const CreatorImage = styled(motion.img)`
  width: 450px;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 1100px){
    width: 100%;
  }
`
const CreatorCopy = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media screen and (max-width: 1100px){
    width: 100%;
  }
`

export default Creators
