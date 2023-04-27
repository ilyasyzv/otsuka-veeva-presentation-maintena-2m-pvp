import React, { createContext, useContext, useState } from 'react';

type TISIModalContext = {
  children: React.ReactNode;
};

type TVal = {
  show: boolean;
  pageName: string;
};

const ISIModalContext = createContext(false);

const ISIModalProvider = ({ children }: TISIModalContext) => {
  const [isShowISIModal, setIsShowISIModal] = useState(false);
  const [preparedPageName, setPreparedPageName] = useState('');

  const showModalHandler = ({ show, pageName }: TVal) => {
    setIsShowISIModal(show);
    setPreparedPageName(pageName);
  };

  return (
    <ISIModalContext.Provider
      value={{
        isiModalParams: { isShowISIModal, preparedPageName },
        showModalHandler,
      }}
    >
      {children}
    </ISIModalContext.Provider>
  );
};

export { ISIModalContext, ISIModalProvider };
