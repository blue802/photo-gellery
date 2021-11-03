import React, { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import "./style.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleInputFile = (e) => {
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError("Please select an image file (png or jpg or jpeg)");
        }
    };

    return (
        <form action="">
            <input
                type="file"
                onChange={handleInputFile}
                id="btn-upload"
                style={{ display: "none" }}
            />
            <label htmlFor="btn-upload">
                <AiOutlinePlusCircle className="btn-upload" />
            </label>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </form>
    );
};

export default UploadForm;
