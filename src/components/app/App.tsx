import { CountdownTimer } from "../../pages/countdown-timer";
import { Main } from "../../pages/main";

function App() {
  // return <CountdownTimer content={<Main />} forcedEnd={!import.meta.env.PROD} />;
  const isProduction = import.meta.env.VITE_IS_PRODUCTION === "true";

  return <CountdownTimer content={<Main />} forcedEnd={!isProduction} />;
}

export default App;
