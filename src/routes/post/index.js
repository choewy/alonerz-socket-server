'use strict';

const router = require('express').Router();
const { all, view, write, update, remove } = require('./controller');

router.get(all.path, all.callback);
router.get(view.path, view.callback);
router.post(write.path, write.callback);
router.put(update.path, update.callback);
router.delete(remove.path, remove.callback);

module.exports = router;