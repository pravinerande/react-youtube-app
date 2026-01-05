import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <Header></Header>
            <RouterProvider router={appRouter}></RouterProvider>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
