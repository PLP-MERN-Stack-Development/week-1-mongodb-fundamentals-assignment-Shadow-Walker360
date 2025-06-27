const express = require('express');
const router = express.Router();
const { getBooks, addBook } = require('../controllers/booksController');

// @swagger docs...
router.get('/', getBooks);
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: string
 *               published_year:
 *                 type: number
 *               price:
 *                 type: number
 *               in_stock:
 *                 type: boolean
 *               pages:
 *                 type: number
 *               publisher:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book added successfully
 */

router.post('/', addBook);  // 🔥 NEW POST ENDPOINT

module.exports = router;
