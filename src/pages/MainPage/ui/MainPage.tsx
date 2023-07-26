import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal";

function MainPage() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div>{t("MainPage")}</div>
            <button onClick={() => setOpen(true)}>----</button>
            <Modal isOpen={open} onClose={handleClose} />
        </>
    );
}
export default MainPage;
