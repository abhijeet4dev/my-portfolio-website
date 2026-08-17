import type { VercelRequest, VercelResponse } from "@vercel/node";
import { CanvasFactory } from "pdf-parse/worker" ;
import { PDFParse } from "pdf-parse";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
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
      CanvasFactory,
    });

    const result = await parser.getText();

    await parser.destroy();

    return res.status(200).json({
      text: result.text || "No text found in this PDF.",
    });
  } catch (error) {
    console.error("Vercel PDF API error:", error);

    return res.status(500).json({
      error: "Failed to read PDF.",
    });
  }
}