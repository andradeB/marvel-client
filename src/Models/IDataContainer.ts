export default interface IDataContainer<T> {
    /**
     *  The requested offset (number of skipped results) of the call.
     */
    offset?: number;

    /**
     *  The requested result limit.
     */
    limit?:number;

    /**
     *  The total number of resources available given the current filter set.
     */
    total?:number;

    /**
     *  The total number of results returned by this call.
     */
    count?:number

    /**
     *  The data returned by the call.
     */
    results?: T;
}
