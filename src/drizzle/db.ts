// import { env } from "@/data/env/server"
// import { drizzle } from "drizzle-orm/node-postgres"
// import * as schema from "./schema"

// export const db = drizzle({
//   schema,
//   connection: {
//     password: env.DB_PASSWORD,
//     user: env.DB_USER,
//     database: env.DB_NAME,
//     host: env.DB_HOST,
//     ssl: { mode: "require" },
//   },
// })

import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
import { env } from "@/data/env/server"

// Connection pool configuration
const connectionPool = postgres(env.DATABASE_URL!, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
  prepare: false,
})

export const db = drizzle(connectionPool, {
  schema,
  logger: true,
})

export const sql = connectionPool
