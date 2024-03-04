import { imageObjType } from "./imageObjType"

export type ImageListPropsType = {
    filesBox: imageObjType[],
    delImage: React.MouseEventHandler,
}