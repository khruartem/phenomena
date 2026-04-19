import { CountdownTimer } from "../../pages/countdown-timer";
import { Main } from "../../pages/main";

function App() {
  // return <CountdownTimer content={<Main />} forcedEnd={!import.meta.env.PROD} />;
  return (
    <CountdownTimer
      content={<Main />}
      forcedEnd={import.meta.env.REACT_APP_IS_TEST}
    />
  );
}

export default App;
