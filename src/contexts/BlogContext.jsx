import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(JSON.parse(sessionStorage.getItem('blogPosts')) || []);
  const [blogId, setBlogId] = useState(localStorage.getItem('blogId') || '');
  const API_KEY = 'AIzaSyB7cnuZOEEHCKGs3F-RWi5Px8BfbUTc_yg';

  // Fetch blogId by URL and store it once in localStorage
  const fetchBlogId = useCallback(async (blogUrl) => {
    if (!blogId) {
      try {
        const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/byurl?url=${blogUrl}&key=${API_KEY}`);
        const newBlogId = response.data.id;
        // Save blogId to localStorage and state
        localStorage.setItem('blogId', newBlogId);
        setBlogId(newBlogId);
        return newBlogId;
      } catch (error) {
        console.error('Error fetching blog:', error);
        return null;
      }
    }
    return blogId;
  }, [blogId, API_KEY]);

  // Fetch posts by blogId and cache them in sessionStorage
  const fetchBlogPosts = useCallback(async (blogUrl) => {
    const cachedPosts = sessionStorage.getItem('blogPosts');
    
    if (cachedPosts) {
      setPosts(JSON.parse(cachedPosts)); // Use cached posts if available
    } else {
      const finalBlogId = await fetchBlogId(blogUrl);
      if (finalBlogId) {
        try {
          const postResponse = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${finalBlogId}/posts?key=${API_KEY}`);
          const fetchedPosts = postResponse.data.items;
          setPosts(fetchedPosts);
          sessionStorage.setItem('blogPosts', JSON.stringify(fetchedPosts)); // Cache the posts for the session
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
    }
  }, [fetchBlogId, API_KEY]);

  // Expose posts and the fetch function to the context
  return (
    <BlogContext.Provider value={{ posts, fetchBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};
