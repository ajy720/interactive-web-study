import { AppProps } from 'next/app';
import 'Styles/style.scss'
import 'Styles/js.scss'
import 'Styles/js.game.scss'
import 'Styles/js.delegation.scss'
import 'Styles/example.scss'
import 'Styles/object.scss'
import 'Styles/scroll.scss'
import 'Styles/animation.event.scss'


const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App;