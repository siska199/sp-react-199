import ContainerModal from "@components/ui/modal/container-modal";
import Button from "../button";
import { TBaseModal } from "@typescript/ui-d";

export interface TPropsModalConfirmation extends Omit<TBaseModal, "onClose"> {
  title?: string;
  button?: {
    cancel?: {
      name?: string;
      onClick: () => void;
    };
    confirm?: {
      name?: string;
      onClick: () => void;
    };
  };
  customeClass?: {
    header?: string;
    body?: string;
    footer?: string;
  };
}

const ModalConfirmation = (props: TPropsModalConfirmation) => {
  const { title, isShow, children, button, customeClass } = props;

  const handleConfirmationBtn = () => {
    button?.confirm?.onClick && button?.confirm?.onClick();
  };

  const handleOnClose = () => {
    button?.cancel?.onClick && button?.cancel?.onClick();
  };

  return (
    <ContainerModal
      customeClass={{ mdContent: "p-4" }}
      title={title}
      isShow={isShow}
      onClose={handleOnClose}
    >
      <div className={`md-body w-[25.6rem]  text-gray ${customeClass?.body}`}>
        {children}
      </div>

      <div
        className={`md-footer h-auto  mb-auto justify-end flex gap-2 ${customeClass?.footer}`}
      >
        <Button variant={"solid-white"} onClick={handleOnClose}>
          {button?.cancel?.name || "Cancel"}
        </Button>
        <Button onClick={handleConfirmationBtn}>
          {button?.confirm?.name || "Confirm"}
        </Button>
      </div>
    </ContainerModal>
  );
};

export default ModalConfirmation;
