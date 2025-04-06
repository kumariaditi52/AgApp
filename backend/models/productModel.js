import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  image: { type: String }, // URL or path to the image
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
