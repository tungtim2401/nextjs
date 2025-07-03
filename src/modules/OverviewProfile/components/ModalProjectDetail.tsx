import { Modal } from "antd";
import { renderString } from "../function";

interface IModalProps {
  open: boolean;
  dataModal?: Record<string, unknown> | null;
  onClose?: () => void;
}

const ModalProjectDetail = ({ open, dataModal, onClose }: IModalProps) => {

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
      destroyOnHidden
    >
      <div className="text-xl font-semibold">{renderString(dataModal?.name)}</div>
      <div className="font-semibold">{renderString(dataModal?.summary)}</div>
      <div className="mt-2 text-sm whitespace-pre-line">{renderString(dataModal?.description)}</div>
    </Modal>
  );
};
export default ModalProjectDetail;
