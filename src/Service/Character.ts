import {MarvelApi} from "./MarvelApi";

import IFilter from "../Models/IFilter";
import ICharacter from "../Models/ICharacter";
import IResponseBase from "../Models/IResponseBase";
import IDataContainer from "../Models/IDataContainer";

export class Character {
    static getList(params?: IFilter) {
        return MarvelApi.instance.get<IResponseBase<IDataContainer<ICharacter[]>>>('/v1/public/characters', {params})
    };

    static getDetail (id: number) {
        return MarvelApi.instance.get<IResponseBase<IDataContainer<ICharacter[]>>>(`/v1/public/characters/${id}`)
    }
};
