'use strict'
const db = require('./conn');

class BlogList {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    static async getAllEntries() {
        try {
            console.log("getAllEntries");
            const response = await db.any(
                `SELECT * FROM posts;`
            );
            return response;
        } catch (error) {
            console.error("ERROR:", error.message);
            return error;
        }
    }

    static async getOneEntry(slug) {
        try {
            const response = await db.one(
                `SELECT * FROM posts 
                WHERE slug = $1;`, [slug]
            );
            return response;
        } catch (error) {
            console.error("ERROR:", error.message);
            return error;
        }
    }

    static async getAllComments(slug) {
        try {
            const post_id = await db.one(
                'SELECT id FROM posts WHERE slug = $1;', [slug]
            );
            const response = await db.any(
                `SELECT * FROM comments 
                WHERE comments.post_id = $1;`, [post_id.id]
            );
            return response;
        } catch (error) {
            console.error("ERROR:", error.message);
            return error;
        }
    }

}

module.exports = BlogList;

//addReview instance method instead of static method then dont need to pass the id.