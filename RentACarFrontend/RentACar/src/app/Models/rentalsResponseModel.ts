import { Rentals } from "./rentals";
import { responseModel } from "./responseModel";

export interface rentalsResponseModel extends responseModel{
    data:Rentals[]
}