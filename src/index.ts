/**
 * Gerber Viewer Extension for EasyEDA
 *
 * 提供两个功能：
 * 1. viewPcbGerber - 打开Gerber查看器并自动加载当前PCB的Gerber文件
 * 2. openGerberViewer - 打开空的Gerber查看器
 */

// eslint-disable-next-line unused-imports/no-unused-vars
export function activate(status?: 'onStartupFinished', arg?: string): void {}

export async function viewPcbGerber(): Promise<void> {
	const file = await eda.pcb_ManufactureData.getGerberFile();
	if (file) {
		const ab = await file.arrayBuffer();
		const bytes = Array.from(new Uint8Array(ab));
		await eda.sys_IFrame.openIFrame(
			'/dist/online-gerber-viewer.html',
			9999,
			9999,
			'gerber-viewer',
			{
				maximizeButton: true,
				minimizeButton: true,
				title: eda.sys_I18n.text('Gerber Viewer'),
			},
		);
		const bc = new BroadcastChannel('gerber-viewer');
		await new Promise<any>(r => {
			bc.onmessage = e => r(e.data);
			setTimeout(() => r(null), 10000);
		});
		bc.postMessage({ bytes, name: file.name });
		bc.close();
	} else {
		await eda.sys_IFrame.openIFrame(
			'/dist/online-gerber-viewer.html',
			9999,
			9999,
			'gerber-viewer',
			{
				maximizeButton: true,
				minimizeButton: true,
				title: eda.sys_I18n.text('Gerber Viewer'),
			},
		);
	}
}
export async function openGerberViewer(): Promise<void> {
	await eda.sys_IFrame.openIFrame(
		'/dist/online-gerber-viewer.html',
		9999,
		9999,
		'gerber-viewer',
		{
			maximizeButton: true,
			minimizeButton: true,
			title: eda.sys_I18n.text('Gerber Viewer'),
		},
	);
}
