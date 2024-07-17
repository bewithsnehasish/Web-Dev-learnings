import {
  RecoilRoot,
  useRecoilValue,
  // useSetRecoilState,
} from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networknotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalnotificationCount = useRecoilValue(totalNotificationSelector);
  // const totalnotificationCount = useMemo(() => {
  //   return (
  //     networknotificationCount +
  //     jobsAtomCount +
  //     messagingAtomCount +
  //     notificationAtomCount
  //   );
  // }, [
  //   networknotificationCount,
  //   jobsAtomCount,
  //   notificationAtomCount,
  //   messagingAtomCount,
  // ]);

  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networknotificationCount >= 100 ? "99+" : networknotificationCount})
      </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>
      <button>Me({totalnotificationCount})</button>
    </>
  );
}

// function ButtonUpdater() {
//   const setMessagingAtomCount = useSetRecoilState(messagingAtom);
//   return (
//     <button
//       onClick={() => {
//         setMessagingAtomCount((c) => c + 1);
//       }}
//     >
//       Messaging
//     </button>
//   );
// }

export default App;
