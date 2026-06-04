import process from 'node:process';
import fs from 'fs-extra';
import path from 'node:path';
import esbuild from 'esbuild';

import common from './esbuild.common';

const EXTENSION_HOOK = `(function(){try{var bc=new BroadcastChannel('gerber-viewer');bc.postMessage({ready:true});bc.onmessage=function(e){if(e.data&&e.data.bytes){bc.close();var f=new File([new Uint8Array(e.data.bytes)],e.data.name);handleFiles([f])}};setTimeout(function(){bc.close()},30000)}catch(e){console.error(e)}})();`;

(async () => {
	await esbuild.build(common);

	const srcHtml = path.join(__dirname, '../src/online-gerber-viewer.html');
	const outHtml = path.join(__dirname, '../dist/online-gerber-viewer.html');

	let html = await fs.readFile(srcHtml, 'utf-8');
	html = html.replace('</script>', `${EXTENSION_HOOK}\n</script>`);
	await fs.writeFile(outHtml, html, 'utf-8');

	process.exit();
})();
