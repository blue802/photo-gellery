import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

import "./style.css";

const ImageGrid = ({ setSelectedImage }) => {
    const { docs } = useFirestore("images");

    return (
        <div className="image-grid">
            {docs.map((doc) => (
                <motion.div
                    key={doc.id}
                    className="image-wrap"
                    whileHover={{ opacity: 1 }}
                    layout
                    onClick={() => setSelectedImage(doc.url)}
                >
                    <motion.img
                        src={doc.url}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;
