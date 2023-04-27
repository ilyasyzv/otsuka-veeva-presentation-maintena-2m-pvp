import React, { useState, useEffect } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

import ButtonContinue from '@/Components/01-atoms/Content/ButtonContinue/ButtonContinue';
import Header from '@/Components/01-atoms/Content/Header/Header';

import './Modal.scss';
import './ModalISI.scss';

import HCEIContent from '@/content/hcei/hcei.mdx';
import ISIContent from '@/content/isi/index.mdx';

type TModalISI = {
  isOpen: boolean;
  onClose: () => void;
};

type TUpdateEvent = {
  clientHeight: number;
  scrollHeight: number;
  scrollTop: number;
};

const ModalISI = ({ isOpen = false, onClose }: TModalISI) => {
  const [isInternalOpen, setIsInternalOpen] = useState(false);
  const [isButtonCloseDisabled, setIsButtonCloseDisabled] = useState(true);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsInternalOpen(true);
      console.log('setIsModalOpen true');
    }, 1000);
  }, []);

  const updateHandler = (event: TUpdateEvent) => {
    const { clientHeight, scrollHeight, scrollTop } = event;

    if (clientHeight + scrollTop > scrollHeight - 350) {
      setIsButtonCloseDisabled(false);
    }
  };

  console.log('isModalOpen', isOpen);

  return (
    <div>
      {isOpen && isInternalOpen && (
        <div
          style={{ display: 'none' }}
          className={`modal modal-background modal-isi ${
            isOpen && isInternalOpen ? 'open' : ''
          }`}
        >
          <div className='modal-wrapper'>
            {activePage === 0 && (
              <div className='modal-page page-0'>
                <div className='modal-content'>
                  <Header
                    type='h2'
                    color='blue-600'
                    custom='mb-20'
                    bgcolor='transparent'
                  >
                    <span>Health Care Economic Information</span>
                  </Header>
                  <HCEIContent />
                </div>
                <div className='modal-actions'>
                  <p>Please accept and review the HCEI information above.</p>
                  <ButtonContinue
                    onClick={() => setActivePage((prev) => prev + 1)}
                  >
                    Accept and
                    <br />
                    Continue
                  </ButtonContinue>
                </div>
              </div>
            )}
            {activePage === 1 && (
              <div className='modal-page page-1'>
                <div className='modal-content'>
                  <Header
                    type='h2'
                    color='blue-600'
                    custom='mb-2'
                    bgcolor='transparent'
                  >
                    <span>
                      INDICATIONS and IMPORTANT SAFETY INFORMATION
                      <br />
                      for ABILIFY ASIMTUFII<sup>®</sup> (aripiprazole) and
                      <br />
                      ABILIFY MAINTENA<sup>®</sup> (aripiprazole)
                    </span>
                  </Header>
                  <Scrollbar
                    minimalThumbSize={43}
                    maximalThumbSize={43}
                    noScrollX
                    onScroll={updateHandler}
                    style={{ height: '510px' }}
                  >
                    <div className='modal-isi'>
                      <ISIContent />
                    </div>
                  </Scrollbar>
                </div>
                <div className='modal-actions'>
                  <p>
                    Scroll to review{' '}
                    <strong>
                      Indications and Important Safety Information
                    </strong>
                    .
                  </p>
                  <ButtonContinue
                    onClick={() => onClose()}
                    disabled={isButtonCloseDisabled}
                  >
                    Continue
                  </ButtonContinue>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalISI;
