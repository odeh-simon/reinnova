import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { BlogContext } from '../../../contexts/BlogContext';
import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
//import backgroundImage from '../../../assets/images/Blog/bg.png';
import Footer from "../../../components/Footer";

const BlogList = () => {
  const { posts, fetchBlogPosts } = useContext(BlogContext);
  const backgroundImage ='https://res.cloudinary.com/dsnz8adqi/image/upload/v1739290570/bg_zq3nvc.png'

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const blogUrl = 'https://reinnovagreenholdings.blogspot.com/';
    fetchBlogPosts(blogUrl);  // Fetch posts once per session
  }, [fetchBlogPosts]);

  // Function to extract the image URL and 100 words after the image
  const extractContent = (htmlContent) => {
    // Regular expression to extract the image URL
    const imageUrlRegex = /https:\/\/blogger.googleusercontent.com\/img\/[^"]+/;
    const imageUrlMatch = htmlContent.match(imageUrlRegex);
  
    let imageUrl = '';
    if (imageUrlMatch) {
      imageUrl = imageUrlMatch[0];
    }
  
    // Remove the image URL part and slice the remaining content to 100 words
    const contentWithoutImage = htmlContent.replace(imageUrlRegex, '');
  
    // Remove HTML tags and replace HTML entities like &nbsp;
    const textContent = contentWithoutImage
      .replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with a space
      .replace(/&[a-z]+;/g, ''); // Remove any other HTML entities (e.g., &amp;)
  
    const words = textContent.split(' ').slice(0, 20).join(' ');
  
    return { imageUrl, words };
  };
  

  return (
    <div>
      <header>
        <NavBar />
        <Header
          headerText="Our Blog"
          middleText="This is where we tell our stories"
          descriptionText="Our blog a melting pot of insight, tips and all updates about the recycling industry and how Reinnova is making the world greener everyday"
          showSubscribeButton={true}
          showBouncingArrow={false}
          showHomeButtons={false}
          textColor='text-[#016E97]'
          backgroundImage={backgroundImage}
        />
      </header>
      <div className="container w-full my-16">
        <div className="grid grid-cols-1 w-[90%] mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {posts.map((post) => {
            const { imageUrl, words } = extractContent(post.content);

            return (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <div className="rounded-[10px] p-4 flex flex-col gap-2 items-center bg-[#FAFEFF] overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[360px]">
                  {/* Render the extracted image URL */}
                  <img src={imageUrl || ''} alt={post.title} className="w-[447px] h-[220px] rounded-[2px] object-cover" />
                  <div className="py-4 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-[16px] font-medium text-[#030B1E] font-[poppins] mb-2">{post.title}</h2>
                      <div className="text-xs font-[poppins] text-[#030B1E] overflow-hidden text-ellipsis">
                        {/* Render the first 100 words of the post content */}
                        <p>{words}...</p>
                      </div>
                    </div>
                    <div className="mt-4 text-[10px] lg:text-xs flex justify-between items-center text-[#646976] font-[poppins]">
                      <span>{post.author.displayName}</span> <span>{new Date(post.published).toDateString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer stayConnectedText=""/>
    </div>
  );
};

export default BlogList;
