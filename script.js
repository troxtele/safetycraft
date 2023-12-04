import axios from "axios";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrls = [
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/Stabicraft-the-boat-range-sizes-fishing-and-adventure-boating-v3__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/Stabicraft-the-boat-style-fishing-and-adventure-boating-v2__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/Stabicraft-the-boat-range-sizes-and-styles-for-fishing-and-adventure-boating__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/why-stabi__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/stabi-innovations-design-boat-big__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/offshore-fishing-boat-stabicraft-tuna__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/stabicraft-boats-boating-family-adventures__FillWzI3MCwxNTBd.jpg",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/page-link-1__FillWzM2MCwyMDBd.png.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/page-link-2__FillWzM2MCwyMDBd.png.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/page-link-3__FillWzM2MCwyMDBd.png.webp",
  "https://stabicraft.com/assets/Uploads/2250-Ultracab-WT/MyStabi/203147647_951350078985185_828473099765175340_n__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/1450-Frontier/MyStabi/1450frontier-1__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/2250-Ultra-Centrecab/MyStabi/2250ucc-1__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/1450-Explorer/MyStabi/241486436_10220474276827872_6518084914234425380_n__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/2100-Supercab/MyStabi/249488504_416574290030284_2551172273034037317_n__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/2250-Ultracab-WT/MyStabi/131443497_2618464158462298_3785630369226503337_n__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/1450-Frontier/MyStabi/1450frontier-6__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/2050-Supercab/MyStabi/211502758_105851708346061_7112160359603750320_n__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/2250-Ultra-Centrecab/MyStabi/2250ucc-2__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/2750-Centrecab/MyStabi/2750centrecab__FillWzgwMCw4MDBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/world-map-prospective__ScaleWidthWzgzMF0.png.webp",
  "https://stabicraft.com/_resources/themes/stabicraft/build/images/stabi-mag-thumb.png",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/Stabicraft-boats-explore-adventure__FillWzYzNSwyNjBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/Stabicraft-boats-explore-adventure-fishing-boat__FillWzYzNSwyNjBd.jpg.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/stabi-boat-fishing__FillWzIwMDAsOTEwXQ.jpg.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/stabi-boat-safety__FillWzIwMDAsOTEwXQ.jpg.webp",
  "https://stabicraft.com/assets/Uploads/Banner-Gallery-Images/IN-USE-as-of-26-03-22/stabi-boat-safety-stable__FillWzIwMDAsOTEwXQ.jpg.webp",
  "https://stabicraft.com/_resources/themes/stabicraft/build/images/placeholders/2000x910.png",
];

const downloadImages = async () => {
  const downloadDir = path.join(__dirname, "src", "assets", "img", "home");
  try {
    await fs.mkdir(downloadDir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
    return;
  }

  for (const imageUrl of imageUrls) {
    const filename = path.basename(new URL(imageUrl).pathname);
    const imagePath = path.join(downloadDir, filename);

    try {
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });
      await fs.writeFile(imagePath, response.data);
      console.log(`Downloaded: ${imageUrl}`);
    } catch (error) {
      console.error(`Error downloading ${imageUrl}: ${error.message}`);
    }
  }

  console.log("All images downloaded.");
};

downloadImages();
