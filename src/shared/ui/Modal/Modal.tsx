import { classNames } from "shared/lib";
import cls from "./Modal.module.scss";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui";

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
    onClosing?: boolean;
    lazy?: boolean;
}

const ANIMATION_TIME = 300;

export function Modal(props: ModalProps) {
    const { className, children, isOpen, onClose, lazy } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
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

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods)}>
                <div className={cls.overlay} onMouseDown={handleStartClose}>
                    <div
                        className={classNames(cls.content, {}, [className])}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
