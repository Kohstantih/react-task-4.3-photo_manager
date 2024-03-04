import { FileTrapPropsType } from "../types/FileTrapPropsType";

export default function FileTrap({ onChange }: FileTrapPropsType) {
    return (
        <div className="box_trap">
            <input
                type="file"
                accept="image/*"
                className="file-loader"
                onChange={onChange}
            />
            <div className="trap">
                <span className="trap_title">Click to select image</span>
            </div>
        </div>
    )
}