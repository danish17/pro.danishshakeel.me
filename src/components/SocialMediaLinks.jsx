import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram, FaFlask, FaEnvelope, FaBlogger } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
	<IconButton as="a" href="mailto:hi@danishshakeel.me" target="_blank" aria-label="Email" icon={<FaEnvelope fontSize="20px" />} />
	<IconButton as="a" href="https://danishshakeel.me" target="_blank" aria-label="Blog" icon={<FaBlogger fontSize="20px" />} />
    <IconButton as="a" href="https://linkedin.com/in/danishshakeel" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/danish17" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://www.researchgate.net/profile/Danish-Shakeel-2" target="_blank" aria-label="ResearchGate" icon={<FaFlask fontSize="20px" />} />
    <IconButton as="a" href="https://instagram.com/iamdanish17" target="_blank" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
  </ButtonGroup>
)