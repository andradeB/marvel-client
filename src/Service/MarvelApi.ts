import axios, {AxiosInstance} from 'axios';
import md5 from 'crypto-js/md5';

export class MarvelApi {
    static instance: AxiosInstance;

    constructor(data: Record<"publicKey" | "privateKey", string>) {
        const params = this.getDefaultParams(data);
        const baseURL = 'https://gateway.marvel.com';

        MarvelApi.instance = axios.create({ baseURL, params })
    }

    private getDefaultParams ({privateKey, publicKey}: Record<"publicKey" | "privateKey", string>) {

        const ts = Date.now() / 1000;

        const hash = md5(ts + privateKey + publicKey).toString();

        const apikey = publicKey;

        return { ts, hash, apikey }
    }

}
