// Prisma client stub - This project uses Supabase instead
// This file exists for compatibility with payment API routes that may not be in use
// If you need payment functionality, install and configure Prisma properly

// Stub PrismaClient type
interface PrismaClient {
  order: {
    create: (args: any) => Promise<any>
    update: (args: any) => Promise<any>
    findUnique: (args: any) => Promise<any>
    findMany: (args: any) => Promise<any>
  }
  [key: string]: any
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Stub implementation - replace with actual Prisma if needed
// This will cause runtime errors if payment routes are called
export const prisma = globalForPrisma.prisma ?? ({
  order: {
    create: async () => {
      throw new Error('Prisma is not configured. This project uses Supabase.')
    },
    update: async () => {
      throw new Error('Prisma is not configured. This project uses Supabase.')
    },
    findUnique: async () => {
      throw new Error('Prisma is not configured. This project uses Supabase.')
    },
    findMany: async () => {
      throw new Error('Prisma is not configured. This project uses Supabase.')
    },
  },
} as PrismaClient)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
