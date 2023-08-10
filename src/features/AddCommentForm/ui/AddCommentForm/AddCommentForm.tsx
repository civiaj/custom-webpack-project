import { classNames } from "shared/lib";
import cls from "./AddCommentForm.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, AppInput } from "shared/ui";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import {
    getAddCommentFormIsLoading,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import { useCallback } from "react";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useAppSelector(getAddCommentFormText);
    // const error = useAppSelector(getAddCommentFormError);
    const isLoading = useAppSelector(getAddCommentFormIsLoading);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onCommentTextChange("");
        onSendComment(text);
    }, [onCommentTextChange, text, onSendComment]);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <AppInput
                    placeholder={t("Enter comment text")}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <AppButton
                    disabled={isLoading}
                    isLoading={isLoading}
                    onClick={onSendHandler}
                >
                    {t("Send")}
                </AppButton>
            </div>
        </DynamicReducerLoader>
    );
};

export default AddCommentForm;
