
import {connect} from '../config/conexion'

//Here we create functions with sql code to execute in routers
export const getMovies = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie')
    res.json(rows)
    console.log(res.json(rows));
}

export const getMovie = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie WHERE mov_id = ?', [
        req.params.id
    ])
    if(rows.length > 0) res.json(rows[0])
    else res.sendStatus(404)
}

// query insert data 
export const saveMovie = async (req, res) => {
    console.log(req.body.mov_id)
    const connection = await connect()
    const [results] = await connection.query(
        "INSERT INTO movie(mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [
        req.body.mov_id,
        req.body.mov_title, 
        req.body.mov_year,
        req.body.mov_time,
        req.body.mov_lang, 
        req.body.mov_dt_rel,
        req.body.mov_rel_country,

    ])

    // connect.query(results,(err,rows,fields)=>{
    //     if(err) throw err;
    //     else{
    //         res.json({status:'Movie Add'})
    //     }
    // })
    res.json({
        id: results.insertId,
        ...req.body,
    })
}


export const updateMovie = async (req, res) => {
    const connection = await connect()
    const results = await connection.query("UPDATE movie SET ? WHERE mov_id = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);

}

export const deleteMovie = async(req, res) => {
        const connection = await connect()
        await connection.query("DELETE FROM movie WHERE mov_id = ?", [
            req.params.id
        ])
        res.sendStatus(204);
    }
