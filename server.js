const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	res.status(200).send("Hello world");
});

app.get("/posts", (req, res) => {
	const posts = [
		{ id: 1, title: "Post 1", content: "Content for Post 1" },
		{ id: 2, title: "Post 2", content: "Content for Post 2" },
		{ id: 3, title: "Post 3", content: "Content for Post 3" },
		{ id: 4, title: "Post 4", content: "Content for Post 4" },
		{ id: 5, title: "Post 5", content: "Content for Post 5" },
		{ id: 6, title: "Post 6", content: "Content for Post 6" },
		{ id: 7, title: "Post 7", content: "Content for Post 7" },
		{ id: 8, title: "Post 8", content: "Content for Post 8" },
		{ id: 9, title: "Post 9", content: "Content for Post 9" },
		{ id: 10, title: "Post 10", content: "Content for Post 10" },
		{ id: 11, title: "Post 11", content: "Content for Post 11" },
		{ id: 12, title: "Post 12", content: "Content for Post 12" },
		{ id: 13, title: "Post 13", content: "Content for Post 13" },
		{ id: 14, title: "Post 14", content: "Content for Post 14" },
		{ id: 15, title: "Post 15", content: "Content for Post 15" },
		{ id: 16, title: "Post 16", content: "Content for Post 16" },
		{ id: 17, title: "Post 17", content: "Content for Post 17" },
		{ id: 18, title: "Post 18", content: "Content for Post 18" },
		{ id: 19, title: "Post 19", content: "Content for Post 19" },
		{ id: 20, title: "Post 20", content: "Content for Post 20" },
	];

	res.status(200).json(posts);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
