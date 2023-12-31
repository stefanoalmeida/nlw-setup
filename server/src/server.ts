import cors from '@fastify/cors'
import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Server is running')
})