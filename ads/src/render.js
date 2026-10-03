const {chromium}=require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await b.newPage({viewport:{width:1080,height:1350}});
for(const n of [1,2,3,4]){await p.goto('file://'+__dirname+`/ad${n}.html`);await p.waitForTimeout(300);await p.screenshot({path:`${__dirname}/../ad${n}_4x5.png`});}
await b.close()})();
