import sql from 'mssql'

export async function getConnection() {
  const dbSettings = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    options: {
      encrypt: true,
      trustServerCertificate: true,
    }
  }
  try {
    const pool= await sql.connect(dbSettings)
    return pool
  } catch (error) {
    console.error(error)
  }
}

export const createDb = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query('CREATE TABLE list (id INT PRIMARY KEY IDENTITY NOT NULL,count INT NOT NULL,)')
    res.json({
      message:'Base de datos creada',
    })
  } catch (error) {
    console.error(error)
  }
}

export {sql}