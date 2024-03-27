export default function authMiddleware(handler) {
  return async (req, res) => {
    handler(req, res);
  };
}
