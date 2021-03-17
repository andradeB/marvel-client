import ISummary from './ISumary';

/**
 * Interface for classes that represent a Data List.
 */

export default interface IDataList {
    /**
     * The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
     */

    available: number;
    /**
     * The number of issues returned in this collection (up to 20).
     */

    returned: number;
    /**
     * The path to the full list of issues in this collection.
     */

    collectionURI: string;
    /**
     * The list of returned issues in this collection.
     */

    items: Array<ISummary>;
}
