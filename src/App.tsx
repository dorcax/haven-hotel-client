import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./api/data/store";
import AppRoute from "./routes/AppRoute";
import { ToastContainer } from "react-toastify";
import { PopupProvider } from "./context/PopUpContext";
import UploaderProvider from "./context/UploaderContext";
// import { Button } from './components/ui/button'

export const App = () => {
  return (
    // <div className=''>
    //   <AppRoute/>
    // </div>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PopupProvider>
          <UploaderProvider>
            <AppRoute />
          </UploaderProvider>

        </PopupProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};
