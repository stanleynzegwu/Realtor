import { createContext, useReducer, useEffect } from 'react';
import { publicRequest } from '../RequestMethods';

const BlogContext = createContext()

const BlogReducer = (state,action) => {
    switch(action.type){
        case 'SET_BLOG':
            return {
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                blogs: {...state.blogs,data:[...state.blogs.data,action.payload.data]} 
            }
        case 'UPDATE_BLOG':
            return { 
                blogs: {
                    ...state.blogs,
                    data: state.blogs.data.map((blog) => (
                        blog._id === action.payload.data._id 
                        ?
                        action.payload.data
                        : 
                        blog
                    ))
                }
             }
        case 'DELETE_BLOG':
            return { blogs: {...state.blogs,data:state.blogs.data.filter((u) => u._id !== action.payload.data._id)} }
        default:
            return state
    }
}

const BlogContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(BlogReducer, {
        blogs:null
    })

  useEffect(() => {
    const getAllBlogs = async () => {
        try{
            const blogs = await publicRequest.get("/blog")
            dispatch({type:'SET_BLOG', payload: blogs})
        }catch(err){
            console.log(err)
        }
    }
    getAllBlogs()
  },[])  
  console.log("BlogContext state:", state.blogs)
    return (
        <BlogContext.Provider value={{...state,dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}

export {BlogContextProvider, BlogContext}