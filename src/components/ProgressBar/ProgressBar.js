import React, { useEffect } from "react";
import { motion } from "framer-motion";

import useStorage from "../../hooks/useStorage";
import "./style.css";

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url]);

    return (
        <div className="progress-bar">
            <motion.div
                style={{
                    height: "8px",
                    backgroundColor: "#888",
                }}
                initial={{ width: 0 }}
                animate={{ width: progress + "%" }}
            ></motion.div>
        </div>
    );
};

export default ProgressBar;
