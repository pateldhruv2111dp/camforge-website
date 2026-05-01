import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';

const TOKEN = "vca_8Z37zpySHIlMzh4ru9JfjaxVAf68FNTu4v0mtTMQm7iys2dUkz115iKh";
// No teamId = deploy to personal account (no auth protection)
const DIST  = "dist/public";

function uploadFile(buf, sha) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.vercel.com',
      path: `/v2/files`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/octet-stream',
        'x-vercel-digest': sha,
        'Content-Length': buf.length
      }
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(res.statusCode));
    });
    req.on('error', reject);
    req.write(buf);
    req.end();
  });
}

function apiPost(endpoint, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const opts = {
      hostname: 'api.vercel.com',
      path: endpoint,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };
    const req = https.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function walkDir(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      files.push(...walkDir(fp));
    } else {
      files.push(fp);
    }
  }
  return files;
}

async function main() {
  const allFiles = walkDir(DIST);
  const payload = [];

  console.log(`Uploading ${allFiles.length} files to Vercel...`);
  for (const fp of allFiles) {
    const buf = fs.readFileSync(fp);
    const sha = crypto.createHash('sha1').update(buf).digest('hex');
    const rel = fp.replace(DIST, '').replace(/\\/g, '/').replace(/^\//, '');
    const code = await uploadFile(buf, sha);
    console.log(`  ${rel} (${(buf.length/1024).toFixed(1)}kb) → HTTP ${code}`);
    payload.push({ file: rel, sha, size: buf.length });
  }

  console.log(`\nAll files uploaded. Creating deployment...`);
  const result = await apiPost('/v13/deployments', {
    name: 'camforge-website',
    files: payload,
    target: 'production',
    projectSettings: {
      framework: null,
      buildCommand: '',
      outputDirectory: '.'
    },
    routes: [{ src: '/(.*)', dest: '/index.html' }]
  });

  console.log('\n--- RESULT ---');
  console.log('State:', result.readyState || result.status);
  console.log('URL:', result.url ? `https://${result.url}` : 'N/A');
  if (result.error) console.log('Error:', JSON.stringify(result.error));
}

main().catch(console.error);
