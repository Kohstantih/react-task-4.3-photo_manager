import { ImageListPropsType } from "../types/ImageListPropsType";
import ImageListItem from "./ImageListItem";

export default function ImageList({ filesBox, delImage }: ImageListPropsType) {
    return (
        <ul className="box_preview">
            {filesBox.map((f) => <ImageListItem imageObj={f} delImage={delImage}/>)}
        </ul>
    )
}