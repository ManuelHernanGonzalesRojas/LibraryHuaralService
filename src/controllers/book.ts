import { Request, Response } from 'express';

export const getBooks = (req: Request, res: Response) => {
    res.json({
        msg: `get Books`
    });
}

export const getBook = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: `get Book`,
        id
    });
}

export const deleteBook = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: `delete Book`,
        id
    });
}

export const postBook = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: `post Book`,
        body
    });
}

export const updateBook = (req: Request, res: Response) => {
    const { body } = req;
    const {id} = req.params;
    res.json({
        msg: `update Book`,
        id,
        body
    });
}