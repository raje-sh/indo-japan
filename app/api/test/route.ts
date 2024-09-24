// import fs from 'fs';
// import path from 'path';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'

// function listFilesRecursively(dir: string) {
//     let results: string[] = [];

//     const list = fs.readdirSync(dir);
//     list.forEach(file => {
//         const filePath = path.join(dir, file);
//         const stat = fs.statSync(filePath);

//         if (stat && stat.isDirectory()) {
//             // Recursively list files in the directory
//             results = results.concat(listFilesRecursively(filePath));
//         } else {
//             results.push(filePath);
//         }
//     });

//     return results;
// }

export function GET(request: NextRequest) {
    // console.log('request', request.url);
    // const contentPath = path.join(process.cwd(), 'content');
    // const files = listFilesRecursively(contentPath);
    // console.log('files', files);
    // return new Response(JSON.stringify(files), { status: 200 });
    return new Response(JSON.stringify([request.url]), { status: 200 });
}