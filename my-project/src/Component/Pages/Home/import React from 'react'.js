// const Gallery = () => {
//     const [posts,setPosts] = useState([])

//     const data = [
//         {image:image1},
//         {image:image2},
//         {image:image1},
//         {image:image3},
//         {image:image4},
//         {image:image3},
//         {image:image5},
//         {image:image6},
//         {image:image7},
//         {image:image8},
//         {image:image9},
//         {image:image2},
//     ]

//     const loadData = () => {
//         setPosts(data)
//     }
//     useEffect(()=>{
//         loadData()
//     },[])
//   return (

//     <div className='w-full h-auto bg-white-light'>

//         <div className="w-full max-w-[356px] mx-auto text-center justify-center">
//             <p className="text-[20px] md:text-[20px]
//              sm:text-[15px] xs:text-[12px] mt-[67px]
//               text-gray-lightpara font-semibold">
//             Share your setup with
//             </p>
//             <h1 className="text-[40px]
//              md:text-[40px] sm:text-[25px]
//               xs:text-[20px] font-bold
//                text-black-dark">
//             #FuniroFurniture
//             </h1>
//         </div>
//         <div className='grid grid-cols-4 gap-4'>
//         {posts.map((post,index)=>(
//             <div key={index}>
//                 <div className='grid gap-2'>
//                 <img src={post.image} className='h-auto max-w-full w-full object-cover'></img>
//                 </div>
//             </div>
//         ))}
//         </div>
//     </div>

// >>>>

// <div className='w-full h-auto bg-white-light'>

//     <div className="w-full max-w-[356px] mx-auto text-center justify-center">
//         <p className="text-[20px] md:text-[20px]
//         sm:text-[15px] xs:text-[12px] mt-[67px]
//         text-gray-lightpara font-semibold">
//         Share your setup with
//         </p>
//         <h1 className="text-[40px]
//         md:text-[40px] sm:text-[25px]
//         xs:text-[20px] font-bold
//         text-black-dark">
//         #FuniroFurniture
//         </h1>
//     </div>

//     <div className='gallery p-[20px]'>
//         <div className="grid
//         xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
//             <div className="grid gap-4">
//                 <div>
//                     <img className="h-auto max-w-full w-full object-cover
//                     "
//                     src={image1} alt='im1'
//                     />
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     "
//                     src={image2} alt="im2"
//                     />
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     "
//                     src={image1} alt="im1r"/>
//                 </div>
//             </div>

//             <div className="grid gap-2 ">
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     "
//                     src={image3} alt="im3"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full
//                     " src={image4} alt="im4"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image3} alt="im3r"/>
//                 </div>
//             </div>
//             <div className="grid gap-2">
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image5} alt="im5"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image6} alt="im6"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image7} alt="im7"/>
//                 </div>
//             </div>
//             <div className="grid gap-2">
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image8} alt="im8"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image9} alt="im9"/>
//                 </div>
//                 <div>
//                     <img className="h-auto max-w-full w-full "
//                     src={image2} alt="im2r"/>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
