import {MarvelApi} from "./MarvelApi";

import IFilter from "../Models/IFilter";
import ICharacter from "../Models/ICharacter";
import IResponseBase from "../Models/IResponseBase";
import IDataContainer from "../Models/IDataContainer";

export class Character {
    static getList(filter: IFilter) {
        return MarvelApi.instance.get<IResponseBase<ICharacter>>('/v1/public/characters')
    };

    static getDetail (id: number) {
        return MarvelApi.instance.get<IResponseBase<IDataContainer<ICharacter>[]>>(`/v1/public/characters/${id}`)
    }
};
