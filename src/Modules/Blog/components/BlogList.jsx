import { Link } from "react-router-dom";
import { useEffect } from "react";
import blogData from "../components/BlogData";
import NavBar from "../../../components/NavBar";
import Header from "../../../components/Header";
import backgroundImage from '../../../assets/images/Blog/bg.png'
import Footer from "../../../components/Footer";

const BlogList = () => {
      // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <header>
            <NavBar />
            <Header
            headerText="Our Blog"
            middleText="This is where we tell our stories"
            descriptionText="Our blog a melting pot of insight, tips and all updates about the recycling industry and how Reinnova is making the world greener everyday"
            showSubscribeButton={true}
            showBouncingArrow={true}
            showHomeButtons={false}
            textColor='text-[#016E97]'
            backgroundImage={backgroundImage}
            />
        </header>
        {/* blog lists */}
        <div className="container mx-auto p-6 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {blogData.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                <div className="rounded-[10px] p-4 flex flex-col gap-2 items-center bg-[#FAFEFF] overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[400px]">
                    <img src={post.image} alt={post.title} className="w-[447px] h-[220px] rounded-[10px] object-cover" />
                    <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-[16px] font-medium text-[#030B1E] font-[poppins] mb-2">{post.title}</h2>
                        <p className="text-sm font-[poppins] text-[#030B1E] overflow-hidden text-ellipsis">{post.subtitle}</p>
                    </div>
                    <div className="mt-4 text-sm flex justify-between items-center text-[#646976] font-[poppins]">
                        <span>{post.author}</span> <span>{post.date}</span>
                    </div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default BlogList;