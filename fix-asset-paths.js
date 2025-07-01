// fix-asset-paths.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, "dist", "index.html");

try {
  // Read index.html
  let htmlContent = fs.readFileSync(indexPath, "utf8");

  // Fix asset paths
  htmlContent = htmlContent
    .replace(/\/shopping-cart\//g, "./")
    .replace(/(href|src)="\//g, '$1="./')
    .replace(/(href|src)="\.\/\//g, '$1="./'); // Fix double slashes

  // Write fixed content back
  fs.writeFileSync(indexPath, htmlContent, "utf8");
  console.log("Successfully fixed asset paths in index.html");
} catch (error) {
  console.error("Error fixing asset paths:", error);
  process.exit(1);
}
