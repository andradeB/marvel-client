export default interface IResponseBase<T> {
    /**
     * The HTTP status code of the returned result.
     */
    code: number;

    /**
     * A string description of the call status.
     */
    status: number;

    /**
     * The copyright notice for the returned result.
     */
    copyright: string;

    /**
     * The copyright notice for the returned result.
     */
    attributionText: string;

    /**
     * The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.
     */
    attributionHTML: string;

    /**
     * The results returned by the call.
     */
    data: T;

    /**
     * A digest value of the content returned by the call.
     */
    etag: string;
}
