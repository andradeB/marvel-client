import IUrl from './IUrl';
import IImage from './IImage';
import IDataList from './IDataList';

/**
 * Interface for classes that represent a Marvel character.
 */
export default interface ICharacter {
    /**
     * The unique ID of the character resource
     */
    id: number;

    /**
     * The name of the character.
     */
    name: string;

    /**
     * A short bio or description of the character.
     */
    description: string;

    /**
     * The date the resource was most recently modified.
     */
    modified: string;

    /**
     * The canonical URL identifier for this resource.
     */
    resourceURI: string;

    /**
     * A set of public web site URLs for the resource.
     */
    urls: Array<IUrl>;

    /**
     * The representative image for this character.
     */
    thumbnail: IImage;

    /**
     * A resource list containing comics which feature this character.
     */
    comics: IDataList;

    /**
     * A resource list of stories in which this character appears.
     */
    stories: IDataList;

    /**
     * A resource list of events in which this character appears.
     */
    events: IDataList;

    /**
     * A resource list of series in which this character appears.
     */
    series: IDataList;
}
