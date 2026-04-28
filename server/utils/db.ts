import mysql from 'mysql2/promise'

let pool: mysql.Pool | null = null

export function getDb(): mysql.Pool {
  if (!pool) {
    const config = useRuntimeConfig()
    pool = mysql.createPool({
      host:             (config.mysqlHost as string)     || 'localhost',
      port:             parseInt((config.mysqlPort as string) || '3306'),
      user:             config.mysqlUser as string,
      password:         config.mysqlPassword as string,
      database:         (config.mysqlDatabase as string) || 'slstl_membership',
      waitForConnections: true,
      connectionLimit:  10,
      charset:          'utf8mb4',
    })
  }
  return pool
}

export async function query<T = any>(sql: string, values?: any[]): Promise<T[]> {
  const [rows] = await getDb().execute(sql, values)
  return rows as T[]
}

export async function queryOne<T = any>(sql: string, values?: any[]): Promise<T | null> {
  const rows = await query<T>(sql, values)
  return (rows as any[])[0] ?? null
}

export async function execute(sql: string, values?: any[]): Promise<mysql.ResultSetHeader> {
  const [result] = await getDb().execute(sql, values)
  return result as mysql.ResultSetHeader
}
