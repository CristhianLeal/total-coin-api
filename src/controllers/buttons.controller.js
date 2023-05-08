import  {getConnection,sql}  from '../database/conection.js'

export const getButtons = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM list')
    const {recordset,rowsAffected} = result
    res.json({
      message:'mensaje',
      recordset,
      rowsAffected

    })
  } catch (error) {
    res.status(500).json({
      message:error.message,
    })
  }
}

export const postButton = async (req, res) => {
  try {
    const {count} = req.body
    const pool = await getConnection()
    pool.request()
    .input("count", sql.Int, count)
    .query('INSERT INTO list (count) VALUES (@count)')
    res.json({
      message: `Button  created`
    })
  } catch (error) {
    res.status(500).json({
      message:error.message,
    })
  }
}

export const putButton = async (req, res) => {
  try {
    const {count} = req.body
    const {id} = req.params
    const pool = await getConnection()
    const result =await pool.request()
    .input("id", id)
    .input("count", sql.Int, count)
    .query('UPDATE list SET count=@count WHERE id = @id')
    const {recordset} = result
    res.json({
      message: `editButton`,
      recordset
    })
  } catch (error) {
    res.status(500).json({
      message:error.message,
    })
  }
}

export const deleteButton = async (req, res) => {
  try {
    const {id} = req.params
    const pool = await getConnection()
    await pool.request()
    .input("id", id)
    .query('DELETE FROM list WHERE id = @id')
    res.json({
      message: `deleteButton id: ${id}`,
    })
  } catch (error) {
    res.status(500).json({
      message:error.message,
    })
  }
}