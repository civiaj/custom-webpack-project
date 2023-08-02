import { classNames } from "shared/lib";
import cls from "./LoginModal.module.scss";
import { Loader, Modal } from "shared/ui";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Suspense } from "react";

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
}
