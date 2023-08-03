import { useAppDispatch } from "app/providers/StoreProvider";
import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
} from "entities/Profile";
import { useEffect } from "react";
import {
    DynamicReducerLoader,
    ReducerList,
} from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

const profileReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={profileReducers}>
            <ProfileCard />
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
