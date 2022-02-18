import { jsonStringifyStream } from '../index';
import { expect } from 'chai';
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


describe('Container utils', async function() {
    it('handles', async function() {
        fs.readdirSync(SAMPLEDIR).forEach(async (file) => {
            const originalJson = JSON.parse(fs.readFileSync(SAMPLEDIR+'/'+file, 'utf8'));
            const newJson = await streamToString(jsonStringifyStream(originalJson));
            expect(newJson).to.deep.equal(originalJson);
        });
    })
})
