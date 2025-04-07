import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../../contexts/BlogContext';
import axios from 'axios';
import Contact from '../../../components/Contact';
import Footer from "../../../components/Footer";
import LoadingSpinner from "../../../components/LoadingSpinner";

const BlogDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const [postContent, setPostContent] = useState(sessionStorage.getItem(`postContent-${id}`) || '');
  const [image, setImage] = useState(null);
  const API_KEY = 'AIzaSyB7cnuZOEEHCKGs3F-RWi5Px8BfbUTc_yg';
  const blogId = localStorage.getItem('blogId');

   // Scroll to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPostContent('');
    setImage(null);

    const selectedPost = posts.find((post) => post.id === id);

    const extractImageAndContent = (content) => {
      // Update regex to remove the entire <img> tag and its attributes
      const imgRegex = /<img[^>]*>/g;
      const contentWithoutImage = content.replace(imgRegex, ''); // Remove the image tag and its attributes
      
      // Extract image if needed (optional)
      const imgSrcRegex = /<img[^>]+src="([^">]+)"/;
      const imgMatch = content.match(imgSrcRegex);
    
      if (imgMatch && imgMatch[1]) {
        setImage(imgMatch[1]);
      }
    
      return contentWithoutImage;
    };
    

    if (selectedPost) {
      const contentWithoutImage = extractImageAndContent(selectedPost.content);
      setPostContent(contentWithoutImage);
      sessionStorage.setItem(`postContent-${id}`, contentWithoutImage); // Cache the post content without the image
    } else {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${id}?key=${API_KEY}`);
          const contentWithoutImage = extractImageAndContent(response.data.content);
          setPostContent(contentWithoutImage);
          sessionStorage.setItem(`postContent-${id}`, contentWithoutImage); // Cache the post content without the image
        } catch (error) {
          console.error('Error fetching post details:', error);
        }
      };
      fetchPost();
    }
  }, [id, posts, blogId, API_KEY]);

  const selectedPost = posts.find(post => post.id === id);

  return (
    <div className="w-full flex flex-col gap-8">
      
      <div className="container w-[90%] mx-auto mt-8" data-aos="fade-up">
        {postContent ? (
          <>
            <h1 className="text-[16px] font-[poppins] font-medium md:text-3xl mb-4">
              {selectedPost?.title || 'Title not available'}
            </h1>
            {image && (
              <img 
                src={image} 
                alt="Blog post cover" 
                className="w-full h-[350px] mb-0 md:mb-8" 
              />
            )}
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-[80px] md:items-start">
              <div className="w-full lg:w-[15%] border-black md:border-t-2 pt-4 flex flex-col gap-3 md:mt-6">
                <p className="text-[#646976] font-[poppins] text-xs lg:text-sm">written by</p>
                <p className="text-[#030B1E] font-[poppins] text-xs font-semibold">
                  {selectedPost?.author?.displayName || 'Anonymous'}
                </p>
                <p className="text-[#646976] font-[poppins] text-xs lg:text-sm">
                  {new Date(selectedPost?.published).toLocaleDateString() || ''}
                </p>
              </div>
              <div className="prose prose-lg max-w-none w-full lg:w-[75%]">
                <div dangerouslySetInnerHTML={{ __html: postContent }} className="prose"></div>
                <p className="text-sm font-[poppins] mt-6 py-4 border-black border-t-2">
                  <Link to={'/about-us'} className="text-[#016E97] font-semibold">Learn more </Link>
                  about Reinnova Green&apos;s sustainable solutions for packaging, plastic waste management, and aluminium products.
                </p>
              </div>
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
        <div className="mt-8">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
