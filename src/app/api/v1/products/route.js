import { getAllProducts } from "controllers/productController";
import { DBConnect } from "lib/DBConnect";

//connect to database for recolection the service

(async function () {
  await DBConnect();
})();

export async function GET(req) {
  return getAllProducts(req);
}

export async function POST(req) {
  return createProduct(req);
}
