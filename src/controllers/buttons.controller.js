import  {getConnection,sql}  from '../database/conection.js'

export const getButtons = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM list')
    const {recordset,rowsAffected} = result
    console.log(result)
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

export const getButton = async (req, res) => {
  res.json({
    message: 'getButton',
  })
}

export const postButton = async (req, res) => {
  try {
    const {idbtn} = req.body
    console.log(idbtn)
    const pool = await getConnection()
    pool.request()
    .input("idbtn", sql.VarChar, idbtn)
    .query('INSERT INTO list (idbtn) VALUES (@idbtn)')
    res.json({
      message: `Button ${idbtn} created`
    })
  } catch (error) {
    res.status(500).json({
      message:error.message,
    })
  }
}

export const putButton = async (req, res) => {
  res.json({
    message: 'putButtons',
  })
}

export const deleteButton = async (req, res) => {
  res.json({
    message: 'deleteButtons',
  })
}