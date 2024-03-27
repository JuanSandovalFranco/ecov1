import {
  deleteProduct,
  getOneProduct,
  uploadProduct,
} from "controllers/productController";

export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") return getOneProduct(req, res);
  if (method === "PATCH") return uploadProduct(req, res);
  if (method === "DELETE") return deleteProduct(req, res);
}
