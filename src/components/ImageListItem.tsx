import { ImageListItemPropsType } from "../types/ImageListItemPropsType";

export default function ImageListItem({ imageObj, delImage }: ImageListItemPropsType) {
    return (
        <li key={imageObj.id} className="preview">
            <img src={imageObj.src} className="preview_img" />
            <button
                data-id={imageObj.id}
                className="btn-del"
                onClick={delImage}
            >
                &#10005;
            </button>
        </li>
    )
}