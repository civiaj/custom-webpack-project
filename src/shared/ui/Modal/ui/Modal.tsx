import { classNames } from "shared/lib";
import cls from "./Modal.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/ui/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
    onClosing?: boolean;
}

const ANIMATION_TIME = 300;

export function Modal(props: ModalProps) {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleStartClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_TIME);
        }
    }, [onClose]);

    const handleKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleStartClose();
            }
        },
        [handleStartClose]
    );

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) window.addEventListener("keydown", handleKey);
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", handleKey);
        };
    }, [isOpen, handleKey]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={handleStartClose}>
                    <div
                        className={cls.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
