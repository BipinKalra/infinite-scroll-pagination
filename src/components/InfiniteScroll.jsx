import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";

export default function InfiniteScroll() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${page}&limit=3`).then(res => {
      setImages(oldImages => [...oldImages, ...res.data])
    })

  }, [page])

  return (
    <div className='images-container'>
      <Posts data = {images} setPage = {setPage}  />
    </div>
  )
}
