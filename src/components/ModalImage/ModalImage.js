import React from "react";
import { motion } from "framer-motion";

import "./style.css";

const ModalImage = ({ selectedImage, setSelectedImage }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setSelectedImage(null);
        }
    };

    return (
        <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(e) => handleClick(e)}
        >
            <motion.img
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                src={selectedImage}
                alt=""
            />
        </motion.div>
    );
};

export default ModalImage;
