import { CarDetails } from "./carDetails";
import { responseModel } from "./responseModel";

export interface carDetailsResponseModel extends responseModel{
    data:CarDetails[]
}