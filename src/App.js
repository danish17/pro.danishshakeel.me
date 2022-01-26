import { ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from '@apollo/client';

import { ErrorLink, onError } from '@apollo/client/link/error';

import { HomePage } from './pages/Home';

import { Box, Center } from '@chakra-ui/react';

import { Footer } from './components/footer/Footer.jsx';

import { Header } from './components/header/Header.jsx';

const token = process.env.REACT_APP_DATO_API_TOKEN;

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		console.error(graphQLErrors);
	}
});

const client = new ApolloClient({
	cache: InMemoryCache,
	link: from([
		ErrorLink,
		new HttpLink({uri: 'https://graphql.datocms.com/' })
	])
});

function App() {
  return (
	<ApolloProvider client={client}>
    <div className="App">
	<Header />
		<Center>
		<Box maxW={"1100px"} w={"1100px"}>
			<HomePage />
			<Footer />
		</Box>
		</Center>
	</div>
	</ApolloProvider>
  );
}

export default App;
