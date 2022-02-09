import React, { useState,useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    
  const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
     const [totalResults, setTotalResults] = useState(0);



    const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

      
        document.title = `${ capitalize(props.category)} - News app`;
       
    

  const updateNews =  async () => {
        props.setProgress(10);
         setPage(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.setCountry}&category=${props.category}&apiKey=${ props.newsKey}&page=${page}&pageSize=${props.pageSize}`;
         props.setProgress(50);
        let data = await fetch(url);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
       
        
          props.setProgress(100);
    }


   const  fetchMoreData = async () =>{
       
        
 

        let url = `https://newsapi.org/v2/top-headlines?country=${props.setCountry}&category=${props.category}&apiKey=${props.newsKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
         setLoading(false);
       
    }

    useEffect(() => {
    updateNews();
  },[]);

    

   
        
   
        return (
           <>
            <div>
            <h1 className="text-center" style={{ marginTop:'90px'}}>News App Top {capitalize(props.category)} Headlines</h1>
             { loading && <Spinner/>}  
           
             <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length != totalResults}
                loader={<Spinner/>}
              
              >
   <div className="container mt-2">
        <div className="row">
        
        {articles.map((element,index)=>{
           
           return <div className="col-4 my-5" key={index}>
            <NewsItems source={element.source.name} author={element.author} publishedAt={element.publishedAt} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url}/>
        </div>

        })}
            
          </div>
                </div>
                     </InfiniteScroll>


              

              
             
            </div>
            </>
        );
      
      }

   News.defaultProps = {
            'country' : "in",
            'pageSize' : 6,
            'newsKey'  :"6ebc2a61e4214ddebacf3db11107688e",
            'category' : 'general', 
    }
    News.propTypes = {
             'country' : PropTypes.string,
            'pageSize' : PropTypes.number,
            'newsKey': PropTypes.string,
            'category' : PropTypes.string
    }

export default News
