import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  url: { type: String, required: true },
  keyword: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.Data || mongoose.model('Data', DataSchema);
