import {Order} from "./Order";

export default interface IFilter {
    name?: string;
    nameStartsWith?: string;
    modifiedSince?: string;
    comics?: number;
    series?: number;
    events?: number;
    stories?: number;
    orderBy?: Order;
    limit?: number;
    offset?: number;
}
