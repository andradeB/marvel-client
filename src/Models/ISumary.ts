/**
 * The item list
 */
export default interface ISummary {
    /**
     * The path to the individual data resource
     */
    resourceURI: string;
    /**
     * The name of the data
     */
    name: string;
    /**
     * The type of the data (not is a data type)
     */
    type?: string;
}
