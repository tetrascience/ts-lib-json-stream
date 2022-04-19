import { jsonStringifyStream } from '../index';
import * as fs from 'fs';

const SAMPLEDIR='test/samples';


async function streamToString(stream: any) {
    // lets have a ReadableStream as a stream variable
    const chunks: any[] = [];

    for await (const chunk of stream) {
        chunks.push(Buffer.from(chunk));
    }

    return Buffer.concat(chunks).toString("utf-8");
}

describe('Container utils', () => {
    jest.setTimeout(60 * 1000);

    it('handles', async () => {
        const files = fs.readdirSync(SAMPLEDIR);
        for(const f of files) {
            console.log("Testing file: " + f);
            const originalJson = JSON.parse(fs.readFileSync(SAMPLEDIR+'/'+f, 'utf8'));
            const newJson = JSON.parse(await streamToString(jsonStringifyStream(originalJson)));
            expect(newJson).toEqual(originalJson);
        }
    })
})
