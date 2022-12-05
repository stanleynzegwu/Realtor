import React from 'react'
import { motion } from 'framer-motion'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

import './Blog.scss'

let arr = [
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'},
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DW2gcUJHDogOJbd573WTCTg9z7xjo47cq88JYPW&s',
heading:'Why Live In London',date:'May 05, 2021',text:'lorem and we can hfhhfhf fhfhfhhdh hhhhdhdhdh dhdhdhdhh jdhdh jhdhd jdjdj bcvdhdhd'}
]
// const Blog = () => {
//     return ( 
//         <motion.section 
//             whileInView={{ y: [100,50,0], opacity: [0, 0, 1]}}
//             transition={{ duration: 0.5}}
//             className='blog'
//             id='blog'
//         >
//             <p className='blog__p heading-text--sm'>blog</p>
//             <h1 className='blog__header heading-text--lg'>our blog</h1>
//             <div className='blog__cardHolder'>
//                 {arr.map(({img,heading,date,text},index) => (
//                     <div className='blog-card' key={index}>
//                         <div className='card-img'>
//                             <img src={img} alt="blog-pix" />
//                         </div>
//                         <div className='card-text'>
//                             <h1 className='heading'>{heading}</h1>
//                             <p className='date'>{date}</p>
//                             <p className='text'>{text}</p>
//                             <span>READ MORE &rarr;</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </motion.section>
//      );
// }

const Blog = () => {
    return (
        <motion.section 
            whileInView={{ y: [100,50,0], opacity: [0, 0, 1]}}
            transition={{ duration: 0.5}}
            className='blog'
            id='blog'
        >
            <p className='blog__p heading-text--sm'>blog</p>
            <h1 className='blog__header heading-text--lg'>our blog</h1>
            <ScrollMenu className='blog__cardHolder'>
             {arr.map(({img,heading,date,text},index) => (
                 <div className='blog-card' key={index}>
                     <div className='card-img'>
                         <img src={img} alt="blog-pix" />
                     </div>
                     <div className='card-text'>
                         <h1 className='heading'>{heading}</h1>
                         <p className='date'>{date}</p>
                         <p className='text'>{text}</p>
                         <span>READ MORE &rarr;</span>
                     </div>
                 </div>
             ))}
            </ScrollMenu>
        </motion.section>
     );
}
 
export default Blog;