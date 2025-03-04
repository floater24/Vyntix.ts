import { type NextApiRequest, type NextApiResponse } from "next";
import { db } from "../../src/db/client"; // ← これはOK！（サーバーサイド）

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await db.query.users.findMany();
  res.status(200).json(users);
}
