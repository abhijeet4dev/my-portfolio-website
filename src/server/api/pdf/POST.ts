import type { Request, Response } from "express";
import { PDFParse } from "pdf-parse";

export default async function handler(
  req: Request,
  res: Response,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const body = req.body as {
      pdf?: string;
    };

    if (!body.pdf) {
      return res.status(400).json({
        error: "No PDF provided.",
      });
    }

    const pdfBuffer = Buffer.from(body.pdf, "base64");

    const parser = new PDFParse({
      data: pdfBuffer,
    });

    const result = await parser.getText();

    await parser.destroy();

    return res.status(200).json({
      text: result.text,
    });
  } catch (error) {
    console.error("PDF API error:", error);

    return res.status(500).json({
      error: "Failed to read PDF.",
    });
  }
}