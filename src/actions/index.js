import FireBaseTools, { firebaseDb } from './firebaseTools';
import {
    LOGIN_WITH_PROVIDER_FIREBASE,
    REGISTER_FIREBASE_USER,
    LOGIN_FIREBASE_USER,
    FETCH_FIREBASE_USER,
    UPDATE_FIREBASE_USER,
    CHANGE_FIREBASE_USER_PASSWORD,
    FIREBASE_PASSWORD_RESET_EMAIL,
    LOGOUT_FIREBASE_USER,
} from './types';

export function loginWithProvider(provider) {
    const request = FireBaseTools.loginWithProvider(provider);
    return {
        type: LOGIN_WITH_PROVIDER_FIREBASE,
        payload: request,
    };
}

export function registerUser(user) {
    const request = FireBaseTools.registerUser(user);
    return {
        type: REGISTER_FIREBASE_USER,
        payload: request,
    };
}

export async function loginUser(user) {
    try {
        const loginInfo = await FireBaseTools.loginUser(user);
        if (loginInfo.success === false) {
            throw loginInfo;
        }
        return {
            type: LOGIN_FIREBASE_USER,
            payload: loginInfo,
        };
    } catch (e) {
        throw e;
    }
}

export async function getUserInfo(uid) {
    const snapshot = await firebaseDb.ref(`/users/${uid}/`).once('value');
    return {
        type: 'USER_INFO',
        payload: snapshot.val(),
    };
}

export function fetchUser() {
    const request = FireBaseTools.fetchUser();
    return {
        type: FETCH_FIREBASE_USER,
        payload: request,
    };
}

export function updateUser(user) {
    const request = FireBaseTools.updateUserProfile(user);
    return {
        type: UPDATE_FIREBASE_USER,
        payload: request,
    };
}

export function changePassword(newPassword) {
    const request = FireBaseTools.changePassword(newPassword);
    return {
        type: CHANGE_FIREBASE_USER_PASSWORD,
        payload: request,
    };
}

export function resetPasswordEmail(email) {
    const request = FireBaseTools.resetPasswordEmail(email);
    return {
        type: FIREBASE_PASSWORD_RESET_EMAIL,
        payload: request,
    };
}

export function logoutUser(user) {
    const request = FireBaseTools.logoutUser(user);
    return {
        type: LOGOUT_FIREBASE_USER,
        payload: request,
    };
}

export function getUserToken() {
    const request = FireBaseTools.getToken();
    return {
        type: 'GET_TOKEN',
        payload: request,
    };
}
