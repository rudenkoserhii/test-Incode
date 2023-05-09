import React
// , { useEffect, useState } 
from "react";
import { Input } from "./components/Input/Input";
import { Main } from "./components/Main/Main";
// import Notiflix from "notiflix";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { changesValue } from "./redux/changes/selectors";
// import { getToDoIssues } from "./redux/toDoIssues/slice";
// import { getInProgressIssues } from "./redux/inProgressIssues/slice";
// import { getDoneIssues } from "./redux/doneIssues/slice";
// import { repoValue } from "./redux/repo/selectors";

function App() {
  // const [toDoState, setToDoState] = useState([]);
  // const [inProgressState, setInProgressState] = useState([]);
  // const [doneState, setDoneState] = useState([]);

  // const url = useSelector(repoValue);
  // const dispatch = useDispatch();
  // const changes = useSelector(changesValue);

  // const repo = url.split("github.com/")[1];

// checkIssues()

  // useEffect(() => {
  //   (async function getData() {
  //     // setIsLoading(true);
  //     try {
  //       const toDo = await axios.get(
  //         `https://api.github.com/repos/${repo}/issues`,
  //         {
  //           params: {
  //             state: "open",
  //             assignee: "none",
  //             page: 1,
  //           },
  //         }
  //       );
  //       if (!toDo.data) {
  //         return Notiflix.Notify.failure(
  //           "Whoops, something went wrong with ToDo issues!"
  //         );
  //       }
  //       setToDoState(toDo.data);
  //       // setToDoState(prev => [...prev, ...toDo.data].slice(prev.length - 1));
  //     } catch (error) {
  //       Notiflix.Notify.warning("ToDo issues not loaded, " + error.message);
  //     } finally {
  //       // setIsLoading(false);
  //     }

  //     try {
  //       const inProgress = await axios.get(
  //         `https://api.github.com/repos/${repo}/issues`,
  //         {
  //           params: {
  //             state: "open",
  //             assignee: "*",
  //             page: 1,
  //           },
  //         }
  //       );
  //       if (!inProgress.data) {
  //         return Notiflix.Notify.failure(
  //           "Whoops, something went wrong with In progress issues!"
  //         );
  //       }
  //       setInProgressState(inProgress.data);
  //       // setInProgressState(prev => [...prev, ...inProgress.data].slice(prev.length - 1));
  //     } catch (error) {
  //       Notiflix.Notify.warning(
  //         "In progress issues not loaded, " + error.message
  //       );
  //     } finally {
  //       // setIsLoading(false);
  //     }

  //     try {
  //       const done = await axios.get(
  //         `https://api.github.com/repos/${repo}/issues`,
  //         {
  //           params: {
  //             state: "closed",
  //             page: 1,
  //           },
  //         }
  //       );
  //       if (!done.data) {
  //         return Notiflix.Notify.failure(
  //           "Whoops, something went wrong with Done issues!"
  //         );
  //       }
  //       setDoneState(done.data);
  //       // setDoneState(prev => [...prev, ...done.data].slice(prev.length - 1));
  //     } catch (error) {
  //       Notiflix.Notify.warning("Done issues not loaded, " + error.message);
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //     checkIssues();
  //   })();
  // }, [url]);

  // function checkIssues() {
  //   if (Object.keys(changes).includes(repo)) {
  //     console.log("yes");
  //   } else {
  //     console.log("no");
  //     dispatch(getToDoIssues(toDoState));
  //     dispatch(getInProgressIssues(inProgressState));
  //     dispatch(getDoneIssues(doneState));
  //   }
  // }

// useEffect(() => checkIssues(), [])

  return (
    <>
      <Input />
      <Main />
    </>
  );
}

export default App;
