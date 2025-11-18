import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const defaultCategories = [
  { name: 'Groceries', icon: '🛒', color: '#10B981' },
  { name: 'Dining Out', icon: '🍽️', color: '#F59E0B' },
  { name: 'Transportation', icon: '🚗', color: '#3B82F6' },
  { name: 'Utilities', icon: '💡', color: '#8B5CF6' },
  { name: 'Entertainment', icon: '🎬', color: '#EC4899' },
  { name: 'Healthcare', icon: '⚕️', color: '#EF4444' },
  { name: 'Shopping', icon: '🛍️', color: '#F97316' },
  { name: 'Education', icon: '📚', color: '#6366F1' },
  { name: 'Housing', icon: '🏠', color: '#14B8A6' },
  { name: 'Other', icon: '📌', color: '#6B7280' },
];

async function main() {
  console.log('🌱 Seeding database...');

  // Create a demo household
  const household = await prisma.household.create({
    data: {
      name: 'Demo Family',
      currency: 'USD',
    },
  });
  console.log(`✅ Created household: ${household.name}`);

  // Create categories for the household
  for (const cat of defaultCategories) {
    await prisma.category.create({
      data: {
        ...cat,
        householdId: household.id,
      },
    });
  }
  console.log(`✅ Created ${defaultCategories.length} categories`);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
