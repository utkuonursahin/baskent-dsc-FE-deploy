import '../src/styles/main.scss'
import {ErrorProvider} from "../src/context/ErrorContext";
function MyApp({Component, pageProps}) {
  return (
    <ErrorProvider>
      <Component {...pageProps} />
    </ErrorProvider>
  )
}
export default MyApp
