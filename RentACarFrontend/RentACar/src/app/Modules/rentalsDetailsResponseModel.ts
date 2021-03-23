import { rentalsDetails } from "./rentalsDetails";
import { responseModel } from "./responseModel";

export interface rentalsDetailsResponseModel extends responseModel{
    data:rentalsDetails[]
}