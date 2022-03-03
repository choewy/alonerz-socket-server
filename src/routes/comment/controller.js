'use strict';

const Comment = require("../../models/Comment");

module.exports = {
    all: {
        method: "GET",
        path: "/:post_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            if (isNaN(post_id)) return res.json({ success: false });
            const rows = await Comment.findAll(post_id);
            rows.reverse();
            return res.json({ success: true, rows });
        }
    },
    write: {
        method: "POST",
        path: "/:post_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            const payload = req.body;
            if (isNaN(post_id)) return res.json({ success: false });
            payload.post_id = post_id;
            const row = await Comment.createOne(payload);
            if (!row) return res.json({ success: false });
            return res.json({ success: true, row });
        }
    },
    update: {
        method: "PUT",
        path: "/:post_id/:comment_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            const comment_id = req.params.comment_id;
            const payload = req.body;
            if (isNaN(post_id)) return res.json({ success: false });
            const row = await Comment.updateOne(post_id, comment_id, payload);
            if (!row) return res.json({ success: false });
            return res.json({ success: true });
        }
    },
    remove: {
        method: "DELETE",
        path: "/:post_id/:comment_id",
        callback: async (req, res) => {
            const post_id = Number(req.params.post_id);
            const comment_id = req.params.comment_id;
            const payload = req.body;
            if (isNaN(post_id)) return res.json({ success: false });
            const row = await Comment.removeOne(post_id, payload);
            if (!row) return res.json({ success: false });
            return res.json({ success: true });
        }
    }
};