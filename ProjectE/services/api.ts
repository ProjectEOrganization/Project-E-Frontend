import axios, { AxiosRequestConfig } from "axios";
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { firebase } from "./firebase";

export const api = axios.create({
    baseURL: "api-url-goes-here",
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const token = await firebase.auth().currentUser?.getIdToken();
    config.headers['authorization'] = token
    config.headers['DEV-INFO'] = `appVer=${Constants.nativeAppVersion}, iosVer=${Device.osVersion}, device=${Device.modelId}, GMT=${new Date().getTimezoneOffset() / 60}`;
    return config
})