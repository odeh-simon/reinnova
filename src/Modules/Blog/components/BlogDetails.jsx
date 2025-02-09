import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import blogData from "../components/BlogData";
import NavBar from "../../../components/NavBar";
import Contact from '../../../components/Contact';
import Footer from "../../../components/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

    // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <NavBar />
      <div className="container w-[90%] mx-auto mt-8">
        {post ? (
          <>
            <h1 className="text-[16px] font-[poppins] font-medium md:text-3xl mb-4">{post.title}</h1>
            
            <img src={post.image} alt={post.title} className="w-full h-[252.004px] object-cover mb-8 rounded-[10px]" />
      
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-[80px] md:items-start">
              <div className="w-full lg:w-[15%] border-black md:border-t-2 pt-4 flex flex-col gap-3 md:mt-6">
                <p className="text-[#646976] font-[poppins] text-xs lg:text-sm">written by</p>
                <p className="text-[#030B1E] font-[poppins] text-xs lg:text-sm font-semibold">{post.author}</p>
                <p className="text-[#646976] font-[poppins] text-xs lg:text-sm">{post.date}</p>
              </div>
              <div className="prose prose-lg max-w-none w-full lg:w-[75%]">
                {post.content.map((section, index) => {
                  if (section.type === 'heading') {
                    return <h2 key={index} className="text-lg font-[poppins] text-[#030B1E] font-semibold mt-6">{section.text}</h2>;
                  } else if (section.type === 'paragraph') {
                    return <p key={index} className="mt-4 text-sm font-[poppins] text-[#030B1E]">{section.text}</p>;
                  } else if (section.type === 'unordered-list') {
                    return (
                      <ul key={index} className="list-disc px-4 mt-4">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                  
                })}
                <p className="text-sm font-[poppins] mt-6 py-4 border-black border-t-2"><Link to={'/about-us'} className="text-[#016E97] font-semibold">Learn more</Link> about Reinnova Green&apos;s sustainable solutions for packaging, plastic waste management, and aluminium products.</p>
                
              </div>
               
            </div>
            
          </>
        ) : (
          <p>Blog post not found!</p>
        )}
      </div>
       {/* contact section */}
       <div className="w-[90%] mx-auto" data-aos="fade-up">
        <Contact/>
       </div>

      {/* footer section */}
      <Footer/>
    </div>
  );
};

export default BlogDetails;