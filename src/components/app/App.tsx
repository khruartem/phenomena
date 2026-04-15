import { CountdownTimer } from "../../pages/countdown-timer";
import { Main } from "../../pages/main";

function App() {
  return <CountdownTimer content={<Main />} forcedEnd={!import.meta.env.PROD} />;
}

export default App;
