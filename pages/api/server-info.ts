// pages/api/server-info.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import os from 'os';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cpuCores = os.cpus().length;
  const totalMemory = os.totalmem() / (1024 * 1024); // Convert to MB
  const freeMemory = os.freemem() / (1024 * 1024); // Convert to MB

  res.status(200).json({
    cpuCores,
    totalMemory: Math.round(totalMemory),
    freeMemory: Math.round(freeMemory),
  });
}
