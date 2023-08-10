import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export interface Profile {
    firstName?: string;
    secondName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
    id?: string;
}

export interface ProfileSchema {
    data?: Profile;
    formData?: Profile;
    isLoading?: boolean;
    isUpdating?: boolean;
    error?: string;
    readOnly?: boolean;
    validateErrors?: ValidateProfileErrors[];
}

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
}
