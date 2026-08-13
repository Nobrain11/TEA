import type { NextApiRequest, NextApiResponse } from "next";
import { addWatchlistToken, getWatchlist, removeWatchlistToken } from "@/services/watchlistService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method || "GET";
  const address = String(req.query.address || "");

  if (method === "GET") {
    return res.status(200).json({ watchlist: getWatchlist() });
  }

  if (method === "POST") {
    return res.status(200).json({ watchlist: addWatchlistToken(address) });
  }

  if (method === "DELETE") {
    return res.status(200).json({ watchlist: removeWatchlistToken(address) });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
