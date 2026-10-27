const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

const dataDirectory = process.env.DATA_DIR || __dirname;
const dataFile = path.join(dataDirectory, "posts.json");

app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

function readPosts() {
  try {
    if (!fs.existsSync(dataFile)) {
      return [];
    }
    const content = fs.readFileSync(dataFile, "utf8").trim();
    if (!content) return [];
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    console.error("Error reading posts:", error);
    return [];
  }
}

function savePosts(posts) {
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory, { recursive: true });
  }
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
}

// Get all stories
app.get("/api/posts", (req, res) => {
  try {
    res.json(readPosts());
  } catch {
    res.status(500).json({
      message: "Could not read posts.",
    });
  }
});

// Create a story
app.post("/api/posts", (req, res) => {
  const { title, author, content } = req.body || {};

  if (
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof content !== "string" ||
    !title.trim() ||
    !author.trim() ||
    !content.trim() ||
    title.length > 100 ||
    author.length > 60 ||
    content.length > 5000
  ) {
    return res.status(400).json({
      message: "Enter valid title, author, and story.",
    });
  }

  try {
    const posts = readPosts();

    const post = {
      id: crypto.randomUUID(),
      title: title.trim(),
      author: author.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("en-IN"),
    };

    posts.unshift(post);
    savePosts(posts);

    res.status(201).json(post);
  } catch {
    res.status(500).json({
      message: "Could not publish story.",
    });
  }
});

// Delete a story
app.delete("/api/posts/:id", (req, res) => {
  try {
    const posts = readPosts();

    const updated = posts.filter((post) => post.id !== req.params.id);

    if (updated.length === posts.length) {
      return res.status(404).json({
        message: "Story not found.",
      });
    }

    savePosts(updated);

    res.json({
      message: "Story deleted.",
    });
  } catch {
    res.status(500).json({
      message: "Could not delete story.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`InkSpace is running on port ${PORT}`);
});
