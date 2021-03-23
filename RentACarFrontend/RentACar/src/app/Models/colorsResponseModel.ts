import { Colors } from "./colors";
import { responseModel } from "./responseModel";

export interface colorsResponseModel extends responseModel{
    data:Colors[]
}