import React, { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import json from "../static/avatars.json";
const avatars = json.avatars;

const firebaseConfig = {
  // ...
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function addFiles() {
  avatars.map(async (avatarURL, i) => {
    const blobToStore = await (await fetch(avatarURL)).blob();
    const curRef = ref(storage, `avatars/${i}`);

    const uploaded = await uploadBytes(curRef, blobToStore);

    const URL = await getDownloadURL(uploaded.ref);
    await fetch(`http://localhost:3000/api/avatars?avatar=${URL}`);
  });
}

// async function getDownloadURLs() {
//   const curRef = ref(storage, `avatars`);
//   const listed = await listAll(curRef);

//   console.log(listed.items);

//   listed.items.forEach(async (arr) => {
//     (arr as any).forEach(async (item) => {
//       const URL = await getDownloadURL(item);
//       avatarURLS.push(URL);
//     });
//   });

//   console.log(JSON.stringify({ avatars: avatarURLS }));
// }

export default function runAutomation() {
  useEffect(() => {
    // addFiles();
  }, []);

  return <div>runAutomation</div>;
}
