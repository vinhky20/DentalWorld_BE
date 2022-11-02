const util = require('util')
const mysql = require('mysql')
const db = require('../db.js')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM REVIEW'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.status(200).json(response)
        })
    },
    getClinicReviews: (req, res) => {
        clinicId = req.params.idClinic;
        sql = 'SELECT * FROM REVIEW WHERE REVIEW_CLINIC = ?';
        db.query(sql, [clinicId], (err, response) => {
            if (err) throw err
            res.status(200).json(response);
        })
    },
    update: (req, res) => {
        let data = req.body;
        let REVIEW_ID = req.params.reviewId;
        let sql = 'UPDATE REVIEW SET ? WHERE REVIEW_ID = ?'
        db.query(sql, [data, REVIEW_ID], (err, response) => {
            if (err) throw err
            res.status(200).json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO REVIEW SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.status(200).json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM REVIEW WHERE REVIEW_ID = ?'
        db.query(sql, [req.params.reviewID], (err, response) => {
            if (err) throw err
            res.status(200).json({ message: 'Delete success!' })
        })
    }
}
