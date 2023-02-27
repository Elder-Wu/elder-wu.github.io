// 创建 es-module-shims.js 标签
const esModuleShimsScript = document.createElement('script');
esModuleShimsScript.src = 'https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js';
esModuleShimsScript.async = true;

// 创建 importmap 标签
const importMapScript = document.createElement('script');
importMapScript.type = 'importmap';
importMapScript.innerHTML = `
    {
        "imports": {
            "three": "https://cdn.staticfile.org/three.js/0.150.0/three.module.min.js"
        }
    }
`;

// 创建 type=module 标签
const moduleScript = document.createElement('script');
moduleScript.type = 'module';
moduleScript.src = "/js/homepage-bg.js";

// 把三个标签添加到 body 的最后
document.body.appendChild(esModuleShimsScript);
document.body.appendChild(importMapScript);
document.body.appendChild(moduleScript);