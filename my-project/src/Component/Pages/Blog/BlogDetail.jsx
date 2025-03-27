import React, { useEffect, useState } from "react";
import blog1 from "../../../assets/images/Blog1.png";
import blog2 from "../../../assets/images/Blog2.png";
import blog3 from "../../../assets/images/Blog3.png";
import admin from "../../../assets/svgs/Admin.svg";
import cal from "../../../assets/svgs/Calander.svg";
import tag from "../../../assets/svgs/Tag.svg";
import search from "../../../assets/svgs/SearchB.svg";
import post1 from "../../../assets/images/post1.png";
import post2 from "../../../assets/images/post2.png";
import post3 from "../../../assets/images/post3.png";
import post4 from "../../../assets/images/post4.png";
import post5 from "../../../assets/images/post5.png";
import BlogPage from "./BlogPage";

const BlogDetail = () => {
  const [posts, setPosts] = useState([]);

  //total data are 9
  const data = [
    {
      id: 1,
      image: blog1,
      subhead1: "Admin",
      subhead2: "14 Oct 2022",
      subhead3: "Wood",
      heading: "Going all-in with millennial design",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: " Read more",
    },
    {
      id: 2,
      image: blog2,
      subhead1: "Admin",
      subhead2: "14 Oct 2022",
      subhead3: "Handmade",
      heading: " Exploring new ways of decorating",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: "Read more",
    },
    {
      id: 3,
      image: blog3,
      subhead1: "  Admin",
      subhead2: " 14 Oct 2022 ",
      subhead3: " Wood",
      heading: "Handmade pieces that took time to make",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: "Read more",
    },

    {
      id: 5,
      image: blog2,
      subhead1: "Admin",
      subhead2: "14 Oct 2022",
      subhead3: "Handmade",
      heading: " Exploring new ways of decorating",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: "Read more",
    },
    {
      id: 6,
      image: blog3,
      subhead1: "  Admin",
      subhead2: " 14 Oct 2022 ",
      subhead3: " Wood",
      heading: "Handmade pieces that took time to make",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: "Read more",
    },
    {
      id: 4,
      image: blog1,
      subhead1: "Admin",
      subhead2: "14 Oct 2022",
      subhead3: "Wood",
      heading: "Going all-in with millennial design",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: " Read more",
    },
    {
      id: 7,
      image: blog1,
      subhead1: "Admin",
      subhead2: "14 Oct 2022",
      subhead3: "Wood",
      heading: "Going all-in with millennial design",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: " Read more",
    },

    {
      id: 9,
      image: blog3,
      subhead1: "  Admin",
      subhead2: " 14 Oct 2022 ",
      subhead3: " Wood",
      heading: "Handmade pieces that took time to make",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: "Read more",
    },
    {
      id: 8,
      image: blog2,
      subhead1: "Admin",
      subhead2: "14 Oct 2022",
      subhead3: "Handmade",
      heading: " Exploring new ways of decorating",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      btn: "Read more",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const loadData = () => {
    setPosts(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="font-poppins">
      <div className="w-full md:h-[2710px]">
        <div className="md:flex">
          {/*left */}
          <div
            className="bg-white-light 
          xl:w-[820px] xl:h-[2385px]  xl:mr-[30px] md:mr-[10px] lg:mr-[10px] sm:mr-[30px] 
          lg:w-[600px] lg:h-[2200px]
          xl:ml-[97px] xl:mt-[106px] xl:mb-[114px]
          lg:ml-[17px] md:ml-[5px] sm:ml-[30px]  
           lg:mt-[100px] md:mt-[50px] sm:mt-[40px] xs:mt-[30px]
          "
          >
            {currentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white-light 
              xl:w-[820px] xl:h-[794px] 
              lg:w-[600px] lg:h-[700px]
              "
              >
                <div className="xs:mx-[12px] sm:mx-[0px]">
                  <img
                    src={post.image}
                    alt="b1"
                    className="xl:w-[817px] xl:h-[500px]"
                  />
                  <div className="flex">
                    <div className="flex mt-[17px]">
                      <img src={admin} alt="ad" />
                      <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]">
                        {post.subhead1}
                      </p>
                    </div>
                    <div className="flex mt-[17px] ml-[35px]">
                      <img src={cal} alt="cal" />
                      <p className="pl-[11px] text-black-light sm:text-[16px] xs:text-[12px]">
                        {post.subhead2}
                      </p>
                    </div>
                    <div className="flex mt-[17px] ml-[35px]">
                      <img src={tag} alt="tag" />
                      <p className="pl-[7px] text-black-light sm:text-[16px] xs:text-[12px]">
                        {post.subhead3}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="pt-[15px] font-medium text-black-darkest 
                  lg:text-[30px] md:text-[27px]"
                    >
                      {post.heading}
                    </h2>
                  </div>
                  <div>
                    <p
                      className="text-black-light 
                  lg:text-[15px] md:text-[14px] pt-[12px] text-justify"
                    >
                      {post.para}
                    </p>
                  </div>
                  <div>
                    <div>
                      <button
                        className="border border-t-0 border-b-[3px] border-r-0 border-l-0 
                        border-w-[75px]
                    border-b-gray-comapreg drop-shadow-md
                        cursor-pointer text-black-darkest
                        xl:text-[16px] lg:text-[15px] xl:pt-[10px] lg:pt-[15px] md:pt-[14px] sm:pt-[10px] xs:pt-[8px]
                        "
                        type="submit"
                      >
                        {post.btn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*right */}
          <div>
            {/*first */}
            <div
              className=" bg-white-light 
          xl:w-[393px] xl:h-[537px] 
          lg:w-[360px] lg:h-[537px] 
          md:w-[350px] md:h-[537px] 
          sm:w-[393px] sm:h-[537px] mt-[84px]
          xs:w-[310 px] xs:h-[537px] sm:mx-[2px]
          "
            >
              <div>
                <input
                  type="text"
                  className="bg-white-light border border-black-light rounded-md
                  xl:w-[311px] xl:h-[58px]
                  lg:w-[300px] lg:h-[50px]
                  md:w-[285px] md:h-[50px]
                  sm:w-[200px] sm:h-[45px]
                  xs:w-[200px] xs:h-[45px]
                  xl:mx-[41px] xl:mt-[22px]
                  lg:mx-[30px] lg:mt-[15px]
                  md:mx-[33px] md:mt-[16px]
                  sm:mx-[28px] sm:mt-[15px]
                  xs:mx-[10px] xs:mt-[15px]
                  "
                />
                <img
                  src={search}
                  alt="srch"
                  className="
                  xl:ml-[318px] xl:mt-[-40px]
                  lg:ml-[300px] lg:mt-[-36px]
                  md:ml-[280px] md:mt-[-35px]
                  sm:ml-[180px] sm:mt-[-34px]
                  xs:ml-[180px] xs:mt-[-34px]
                  "
                />
              </div>
              <div
                className="bg-white-light  
              lg:ml-[77px] lg:mr-[65px] lg:mt-[43px] lg:mb-[61px]
              md:mx-[50px] sm:mx-[28px] xs:mx-[14px]
              md:mt-[58px] md:mb-[50px]
              sm:mt-[45px] xs:mt-[40px]
              w-[251px] h-[353px]"
              >
                <h2 className="text-black-darkest font-medium text-[24px]">
                  Categories
                </h2>
                <div>
                  <div className="flex mt-[33px]">
                    <p className="text-black-light text-[16px]">Crafts</p>
                    <p className="text-black-light text-[16px] pl-[191px]">2</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Design</p>
                    <p className="text-black-light text-[16px] pl-[185px]">8</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Handmade</p>
                    <p className="text-black-light text-[16px] pl-[156px]">7</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Interior</p>
                    <p className="text-black-light text-[16px] pl-[183px]">1</p>
                  </div>
                  <div className="flex pt-[41px]">
                    <p className="text-black-light text-[16px]">Wood</p>
                    <p className="text-black-light text-[16px] pl-[193px]">6</p>
                  </div>
                </div>
              </div>
            </div>

            {/*second */}
            <div
              className="bg-white-light flex-wrap  
           xl:w-[393px] xl:h-[650px] xl:ml-[4px]
           lg:w-[360px] lg:h-[650px] lg:ml-[4px]
           md:w-[350px] md:h-[650px] md:ml-[4px]
           sm:w-[393px] sm:h-[650px] sm:ml-[4px]
           xs:w-[310 px] xs:h-[650px] xs:mx-[2px]
           mt-[41px]"
            >
              <div
                className="bg-white-light     
              xl:w-[252px] h-[618px] 
              lg:w-[200px] 
              md:w-[200px] sm:w-[200px] xs:w-[200px]
              xl:ml-[76px] xl:mr-[65px] my-[16px]
              lg:ml-[70px] lg:mr-[60px] md:mx-[50px] sm:mx-[30px] xs:mx-[10px]
              
              "
              >
                <h2 className="font-medium text-black-darkest text-[24px]">
                  Recent Posts
                </h2>
                <div>
                  <div className="flex mt-[26px]">
                    <img src={post1} alt="p1" className="w-[80px] h-[80px]" />
                    <div className="ml-[12px] md:ml-[15px] ">
                      <h2 className="text-black-darkest text-[14px]">
                        Going all-in with millennial design
                      </h2>
                      <p className="text-black-light text-[12px] pt-[5px]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post2} alt="p2" />
                    <div className="ml-[12px]">
                      <h2 className="text-black-darkest text-[14px]">
                        Exploring new ways of decorating
                      </h2>
                      <p className="text-black-light text-[12px] pt-[5px]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post3} alt="p3" />
                    <div className="ml-[12px]">
                      <h2 className="text-black-darkest text-[14px]">
                        Handmade pieces that took time to make
                      </h2>
                      <p className="text-black-light text-[12px] pt-[5px]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post4} alt="p4" />
                    <div className="ml-[12px]">
                      <h2 className="text-black-darkest text-[14px]">
                        Modern home in Milan
                      </h2>
                      <p className="text-black-light text-[12px] pt-[5px]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[39px]">
                    <img src={post5} alt="p5" />
                    <div className="ml-[12px]">
                      <h2 className="text-black-darkest text-[14px]">
                        Colorful office redesign
                      </h2>
                      <p className="text-black-light text-[12px] pt-[5px]">
                        03 Aug 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:mx-[524px] xl:mt-[-60px] lg:mt-[5px] md:mt-[70px] sm:mt-[45px] xs:mt-[40px]">
          <BlogPage
            currentPgae={currentPage}
            setCurrentPage={setCurrentPage}
            handlePageChange={handlePageChange}
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

//Blog-recent posts
//Blog-pagination
//old-pagi-set
//authentication-google,facebook
//create google
//sin,sout,logout