import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export default async function handler(req, res) {
  const { query } = req.query;

  // Connectez-vous à la base de données
  await connectToDatabase();

  try {
    // Rechercher dans MongoDB selon la requête
    const results = await Product.find({ name: new RegExp(query, 'i') }).limit(10);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
