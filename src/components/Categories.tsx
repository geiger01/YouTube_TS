import React,{useState} from 'react'

interface IPropsCategories{
    getVideos: (topic: string)=>void
}


export const Categories = ({getVideos}: IPropsCategories) => {

    const [currCat, setCurrCat] = useState('All')


    const categories = ['All', 'Piano', 'Music', 'JavaScript', 'Memes', 'Cute Cats', 'MacBook', 'HowToBasic', 'React.js', 'Comedies', 'Netflix', 'Modern Warfare', 'Top 10', 'Dogs', 'Spiderman', 'SpongeBob','Trailers', 'Movies' , 'Photography']
    
    return (
        <div className="categories ">
            {categories.map((cat)=><h3 onClick={()=>{setCurrCat(cat);getVideos(cat)}} className={`${currCat === cat ? 'active' : ""}`}>{cat}</h3>)}
        </div>
    )
}
