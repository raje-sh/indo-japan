
import path from 'path';
import fs from 'fs';
export const readFilesFromContentDirectory = () => {
    // Why this function? https://vercel.com/guides/how-can-i-use-files-in-serverless-functions
    const contentPathDir = path.join(process.cwd(), 'content');
    const list = fs.readdirSync(contentPathDir);
    return new Response(JSON.stringify(list), { status: 200 });
}