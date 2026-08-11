import type { Request, Response } from "express";
import aiHandler from "../src/server/api/ai/POST";

export default async function handler(
  req: Request,
  res: Response
) {
  return aiHandler(req, res);
}