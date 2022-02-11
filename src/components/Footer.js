import styled from "styled-components"
import footerLogo from "../assets/logo.png"
import twitter from '../assets/twitter2.svg'
import discord from '../assets/discord2.svg'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={footerLogo} alt="Footer Logo" />
      <FooterLinks>
        <TwitterButton href='https://twitter.com/FunguyzNFT' target='_blank'>
          <img src={twitter} alt='twitter Icon' />
        </TwitterButton>
        <DiscordButton href='https://discord.gg/d7NxUfYwDy' target='_blank'>
          <img src={discord} alt='discord icon' />
        </DiscordButton>
      </FooterLinks>
      <p>©2022 FunGuyz All Rights Reserved</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  margin-top: 4rem;
  min-height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5c88ee;
padding: 2rem;
gap: 1rem;
`

const FooterLogo = styled.img`
  height: height;
  width: 150px;
  object-fit: cover;
`
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
const TwitterButton = styled.a`
  img {
    height: 35px;
    widith: 35px;
  }
`

const DiscordButton = styled.a`
  img {
    height: 35px;
    width: 35px;
  }
`


export default Footer
