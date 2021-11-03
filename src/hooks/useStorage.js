import { useState, useEffect } from "react";
import firebase from "firebase";

import { storage, firestore } from "../firebase";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection("images");

        storageRef.put(file).on(
            "state_changed",
            (snap) => {
                let percentage =
                    (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                collectionRef.add({
                    url,
                    createAt: firebase.firestore.FieldValue.serverTimestamp(),
                });
                setUrl(url);
            }
        );
    }, [file]);

    return { progress, url, error };
};

export default useStorage;
