import { ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from '@apollo/client';

import { ErrorLink, onError } from '@apollo/client/link/error';

import { HomePage } from './pages/Home';

import { AllPublications } from './pages/Publications';

import { PortfolioPage } from './pages/Portfolio';

import { Box, Center } from '@chakra-ui/react';

import { Footer } from './components/footer/Footer.jsx';

import { Header } from './components/header/Header.jsx';

/**
 * Apollo Configuration
 */
 const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.warn(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	}

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
	errorLink,
	new HttpLink({
		uri: 'https://danishshakeel.me/graphql',
	})
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

function App() {
  return (
	<ApolloProvider client={client}>
    <div className="App">
	<Header />
		<Center>
		<Box maxW={"1100px"} w={"1100px"}>
			<PortfolioPage />
			<Footer />
		</Box>
		</Center>
	</div>
	</ApolloProvider>
  );
}

export default App;
