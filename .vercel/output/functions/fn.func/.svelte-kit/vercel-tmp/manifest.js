export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","fonts/OFL.txt","fonts/PressStart2P-Regular.ttf","images/Bitcoin_evergreen.png","images/banana-svgrepo-com.svg","images/car.svg","images/hongkong.webp","images/logo/Emurgo.jpeg","images/logo/Holdex.jpeg","images/logo/Lumiere.png","images/nostrica-1a.png","images/nostrich.png","images/pineapple-svgrepo-com.svg","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".ttf":"font/ttf",".svg":"image/svg+xml",".webp":"image/webp",".jpeg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1b591b1a.js","imports":["_app/immutable/entry/start.1b591b1a.js","_app/immutable/chunks/index.4da1f6d7.js","_app/immutable/chunks/singletons.b89f370e.js","_app/immutable/chunks/index.06520791.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6af8cdad.js","imports":["_app/immutable/entry/app.6af8cdad.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.4da1f6d7.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/e/[id]",
				pattern: /^\/e\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/join",
				pattern: /^\/join\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/meetup",
				pattern: /^\/meetup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
