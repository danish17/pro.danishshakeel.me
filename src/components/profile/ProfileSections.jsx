import { Heading, Link, Text, useColorModeValue, GridItem, Grid, Box, } from "@chakra-ui/react";
import { BiCodeCurly } from "react-icons/bi";
import { FaWordpressSimple } from "react-icons/fa";
import { FiServer, FiTrendingUp } from "react-icons/fi";

export const AboutMe = () => {
	return (
		<Box>
		<Heading mb={8}>About Me</Heading>
		<Text fontSize={'md'} align={'justify'}>
			I am a <strong className={useColorModeValue('text--blue','text--yellow')}>Full Stack Developer</strong> based in Kashmir, India. I create <strong className={useColorModeValue('text--blue','text--yellow')}>unique</strong> and <strong className={useColorModeValue('text--blue','text--yellow')}>enterprise-grade</strong> web experiences, and I have been <strong className={useColorModeValue('text--blue','text--yellow')}>developing for the web for more than four (4) years</strong>. Currently working as a Systems Engineer at <Link href="https://rtcamp.com" isExternal>rtCamp</Link>, I set up and maintain <strong className={useColorModeValue('text--blue','text--yellow')}>performant Linux servers, deploy CI/CD pipelines, and automate processes</strong>. Having served numerous clients from around the globe, <strong className={useColorModeValue('text--blue','text--yellow')}>I help businesses get the best out of technology</strong>.
		</Text>
		</Box>
	);
}

export const Skills = () => {
	const Feature = (props) => {
		return (
		  <GridItem>
			{props.icon}
			<Heading as="h3" fontSize="xl" fontWeight="600" my={2}>
			  {props.heading}
			</Heading>
			<Text>{props.text}</Text>
		  </GridItem>
		);
	};

	return (
		<Box>
		<Heading mb={8}>What I Do</Heading>
		<Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Full Stack Development'}
		  icon={<BiCodeCurly fontSize={'20px'} />}
          text={'I develop and maintain full-stack web applications using the latest technologies and frameworks.'}
        />
        <Feature
          heading={'WordPress Development'}
		  icon={<FaWordpressSimple fontSize={'20px'} />}
          text={'I develop enterprise-grade WordPress websites with custom themes and plugins.'}
        />
        <Feature
          heading={'Server Administration'}
		  icon={<FiServer fontSize={'20px'} />}
		  text={'I set up and maintain Linux servers on AWS, Linode, Digital Ocean, Hetzner, and more. I also help migrate and upgrade existing servers.'} 
        />
        <Feature
          heading={'IT Consulting'}
		  icon={<FiTrendingUp fontSize={'20px'} />}
          text={'I help businesses get the best out of technology by providing IT consulting, training, and support.'}
        />
      </Grid>
	  </Box>
	);
}