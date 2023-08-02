import { profileReducer } from "entities/Profile";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

const profileReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    return (
        <DynamicReducerLoader reducers={profileReducers}>
            <div></div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
