import { classNames } from "shared/lib";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export function LoginModal(props: LoginModalProps) {
    const { isOpen, onClose, className } = props;
    return (
        <Modal
            lazy={true}
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
}
