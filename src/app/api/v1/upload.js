import { uploadImage } from "controllers/uploadController";

export default async function POST(res, req) {
  try {
    if (req.method !== "POST")
      return res
        .status(405)
        .json({ status: "fail", message: "method not supported" });

    return uploadImage(req, res);
  } catch (error) {
    return res.status(500).json({ status: "fail", message: error });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
