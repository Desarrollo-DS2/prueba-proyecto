"use client";

import store from "./_store/getStore";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;