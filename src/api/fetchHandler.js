import BASE_URL from "./config";

// Create a wrapper for the fetch API
const fetchHandler = async (url, options = {}) => {
  // Request Interceptor: Add authorization token
  const token = localStorage.getItem("authToken");
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Check if we're uploading a file (i.e., multipart/form-data)
  const isFileUpload = options.body instanceof FormData;

  // If not a file upload, set the Content-Type to application/json (default for other requests)
  if (!isFileUpload) {
    if (!options.headers) {
      options.headers = {
        "Content-Type": "application/json",
      };
    } else if (!options.headers["Content-Type"]) {
      options.headers["Content-Type"] = "application/json";
    }
  }

  // Log request data (for debugging purposes)
  console.log("Request sent to:", `${BASE_URL}${url}`, options);

  try {
    // Perform the fetch request
    const response = await fetch(`${BASE_URL}${url}`, options);

    // Response Interceptor: Handle errors
    if (!response.ok) {
      // Example: Handle HTTP error codes (you can customize this)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Log response data (for debugging purposes)
    console.log("Response data:", data);

    return data; // Return the parsed response data
  } catch (error) {
    // Handle errors, just like in the response interceptor of Axios
    console.error("API Error:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export default fetchHandler;
