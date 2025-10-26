const BASE = "https://fakestoreapi.com";

// جلب جميع المنتجات
export async function getAllProducts() {
  try {
    const res = await fetch(`${BASE}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// جلب منتج واحد حسب ID
export async function getProductById(id) {
  try {
    const res = await fetch(`${BASE}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

// جلب عدد محدود من المنتجات
// export async function getLimitedProducts(limit = 10) {
//   try {
//     const res = await fetch(`${BASE}/products?limit=${limit}`);
//     if (!res.ok) throw new Error("Failed to fetch limited products");
//     return res.json();
//   } catch (error) {
//     console.error("Error fetching limited products:", error);
//     throw error;
//   }
// }

// جلب جميع الفئات
export async function getAllCategories() {
  try {
    const res = await fetch(`${BASE}/products/categories`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

// جلب منتجات حسب Category
export async function getProductsByCategory(category) {
  try {
    const res = await fetch(`${BASE}/products/category/${category}`);
    if (!res.ok)
      throw new Error(`Failed to fetch products in category ${category}`);
    return res.json();
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    throw error;
  }
}

// جلب منتجات مع ترتيب
export async function getSortedProducts(sort = "asc") {
  try {
    const res = await fetch(`${BASE}/products?sort=${sort}`);
    if (!res.ok) throw new Error("Failed to fetch sorted products");
    return res.json();
  } catch (error) {
    console.error("Error fetching sorted products:", error);
    throw error;
  }
}
