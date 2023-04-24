import React, { useContext, useState, useEffect } from 'react';
import { ISIModalContext } from '@/context/ISIModalContext';

const lsISIModalKey = 'isi_modal';

const useShowModalISI = () => {
  const { showModalHandler } = useContext(ISIModalContext);
  const [isShowISIModal, setIsShowISIModal] = useState(false);

  useEffect(() => {
    if (isShowISIModal) {
      const lsISIModal = sessionStorage.getItem(lsISIModalKey);
      if (!lsISIModal) {
        showModalHandler(true);
      }
    }
  }, [isShowISIModal]);

  return setIsShowISIModal;
};

export default useShowModalISI;
