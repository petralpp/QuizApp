import { Request, Response, NextFunction } from "express";

export const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: "unknown endpoint" });
};

export const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(`${error.name}: ${error.message}`);
  if (error.name === "CastError") {
    res.status(400).send(`Malformatted id: ${error.message}`);
  } else {
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
  }
};
