import { RootState } from "app/providers/StoreProvider";

export const getProfileFormData = (state: RootState) => state.profile?.formData;
