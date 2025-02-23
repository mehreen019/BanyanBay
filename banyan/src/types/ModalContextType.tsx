export type ModalContextType = {
    data?: any;
    openModal: (modalType: ModalContextType["modalType"] , data?: any) => void;
    closeModal: () => void;
    modalType: "pop-up" | null;
    isModalOpen: boolean;
    showWarning: (options: { title: string; content: string }) => void;
  };