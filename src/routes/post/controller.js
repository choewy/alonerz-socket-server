'use strict';

const Post = require("../../models/Post");

module.exports = {
    all: {
        method: "GET",
        path: "/",
        callback: async (req, res) => {
            const rows = await Post.findAll();
            return res.json({ success: true, rows });
        }
    },
    view: {
        method: "GET",
        path: "/:post_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            if (isNaN(post_id)) return res.json({ success: false });
            const row = await Post.findOne(post_id);
            if (!row) return res.json({ success: false });
            return res.json({ success: true, row });
        }
    },
    write: {
        method: "POST",
        path: "/",
        callback: async (req, res) => {
            const payload = req.body;
            const row = await Post.createOne(payload);
            if (!row) return res.json({ success: false });
            return res.json({ success: true });
        }
    },
    update: {
        method: "PUT",
        path: "/:post_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            const payload = req.body;
            if (isNaN(post_id)) return res.json({ success: false });
            const row = await Post.updateOne(post_id, payload);
            if (!row) return res.json({ success: false });
            return res.json({ success: true });
        }
    },
    remove: {
        method: "DELETE",
        path: "/:post_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            const payload = req.body;
            if (isNaN(post_id)) return res.json({ success: false });
            const row = await Post.removeOne(post_id, payload);
            if (!row) return res.json({ success: false });
            return res.json({ success: true });
        }
    }
};