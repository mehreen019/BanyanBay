'use client';
import { ReactNode, useContext, useEffect, useState, createContext, useMemo } from 'react';
import { Modal } from 'antd';
import { ModalContextType } from '../types/ModalContextType';
import PopUp from '../components/PopUp';


export const ModalContext = createContext<ModalContextType>({
  openModal: () => { },
  closeModal: () => { },
  isModalOpen: false,
  modalType: null,
  data: undefined,
  showWarning: () => { }
});

const modalStyles = {
  header: {},
  body: {},
  content: {
    padding: '14px',
    borderRadius: '1rem',
    marginTop: '3rem',
  },
  footer: {
    margin: 0
  }
};

interface ModalConfig {
  type: string;
  width?: string | number;
  component: (data?: any) => React.ReactNode;
}

const modalConfigs: { [key: string]: ModalConfig } = {
  'pop-up': {
    type: 'pop-up',
    component: (data: any) => (
      <PopUp />
    )
  }
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalContextType['modalType'] | null>(null);
  const [data, setData] = useState<any>();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      setIsModalOpen(false);
      setModalType(null);
      setData(undefined);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (type?: ModalContextType['modalType'], modalData?: any) => {
    console.log('opening modalllll', modalData);
    setIsModalOpen(true);
    setModalType(type || null);
    setData(modalData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setData(undefined);
  };

  const currentModalConfig = useMemo(() => {
    return modalType ? modalConfigs[modalType] : null;
  }, [modalType]); 
  

  const modalWidth = useMemo(() => {
    
  }, [windowWidth, currentModalConfig?.width]);
  
  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen, modalType, data, showWarning: () => {} }}>
      {children}
      {isModalOpen && currentModalConfig && (
        <Modal
          
          className="modal-container"
          open={isModalOpen}
          onCancel={closeModal}
          closeIcon={false}
          footer={false}
          styles={modalStyles}
        >
          {currentModalConfig.component(data)}
        </Modal>
      )}

    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
