import { AppProps } from 'next/app';
import 'Styles/style.scss'


const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App;