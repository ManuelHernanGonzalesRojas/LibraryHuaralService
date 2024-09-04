"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.postBook = exports.deleteBook = exports.getBook = exports.getBooks = void 0;
const getBooks = (req, res) => {
    res.json({
        msg: `get Books`
    });
};
exports.getBooks = getBooks;
const getBook = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `get Book`,
        id
    });
};
exports.getBook = getBook;
const deleteBook = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: `delete Book`,
        id
    });
};
exports.deleteBook = deleteBook;
const postBook = (req, res) => {
    const { body } = req;
    res.json({
        msg: `post Book`,
        body
    });
};
exports.postBook = postBook;
const updateBook = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: `update Book`,
        id,
        body
    });
};
exports.updateBook = updateBook;
