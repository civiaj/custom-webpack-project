import { ComponentType, lazy } from "react";
import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<ComponentType<AddCommentFormProps>>(
    () => import("./AddCommentForm")
);
