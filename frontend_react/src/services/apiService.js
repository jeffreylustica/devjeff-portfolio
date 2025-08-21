const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5555";

const fetchDocuments = async (collectionName) => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/public/${collectionName}/documents`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { fetchDocuments };
