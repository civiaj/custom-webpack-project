import { Profile, ValidateProfileErrors } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
    if (!profile) return [ValidateProfileErrors.NO_DATA];

    const { firstName, secondName, age, avatar, city, username } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (
        !firstName ||
        firstName.trim().length < 3 ||
        !secondName ||
        secondName.trim().length < 3 ||
        !avatar ||
        !city ||
        !username ||
        username.trim().length < 3
    ) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || (age && (age < 14 || age > 100))) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    return errors;
};
