"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children,session }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate persistor={persistor} />
        {children}
      </Provider>
    </SessionProvider>
  );
};
