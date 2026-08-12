import type { VercelRequest, VercelResponse } from "@vercel/node";
import handler from "../src/server/api/pdf/POST";

export default async function pdfHandler(
  req: VercelRequest,
  res: VercelResponse,
) {
  return handler(req, res);
}