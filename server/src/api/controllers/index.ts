import { Request, Response } from "express";

export const sample_controller = async (req: Request, res: Response) => {
  console.log("Working");
  res.sendStatus(200);
};
