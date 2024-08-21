const fs = require("fs");
const path = require("path");

(async () => {
	const folders = await fs.promises.readdir(path.dirname(__filename));
	folders.forEach(async (folder) => {
		if (
			fs.lstatSync(path.join(path.dirname(__filename), folder)).isDirectory()
		) {
			const baseFolder = path.join(path.dirname(__filename), folder);
			const files = await fs.promises.readdir(baseFolder);
			files.forEach(async (file) => {
				change(file, baseFolder);
			});
		}
		// const files = await fs.promises.readdir(
		// 	path.dirname(__filename) + path.dirname(folder)
		// );
		// change(file);
	});
})();

const change = (file, baseFolder) => {
	console.log(file.split(".").slice(-1));
	if (file.split(".").slice(-1)[0] === "svg") {
		const newName = file
			.split(/(?=[A-Z])/)
			.join("-")
			.toLowerCase();
		fs.rename(
			path.join(baseFolder, file),
			path.join(baseFolder, newName),
			(err) => {
				if (err) console.log(err);
			}
		);
	}
};
