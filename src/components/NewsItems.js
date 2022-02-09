import React from 'react'

const NewsItems = (props) => {
    
      let { title,description,urlToImage,url,author,publishedAt,source} =  props;
        return (
            <div>
            <div className="card" style={{ width: "18rem" }} >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex:'1'}}>
   {source}</span>
  <img src={urlToImage?urlToImage:"https://www.reuters.com/lifestyle/science/nasas-revolutionary-new-space-telescope-due-launch-french-guiana-2021-12-25/"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} { new Date(publishedAt).toGMTString()}</small></p>
    <a href={(url)? url :"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/kali_kali_ankhien-647x363.png?fewQ1R4PHE4U0vT5XWRt9vtOD9OlTq_3"} className="btn btn-primary">Read more</a>
  </div>
</div> 
            </div>
        )
   
}

export default NewsItems
