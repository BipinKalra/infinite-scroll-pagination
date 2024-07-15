import React, { useEffect } from 'react'

export default function Posts({data, setPage}) {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      if (param[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPage(page => page + 1)
      }
    }, {threshold: 0.5})
    // Threshold can be used to check the % of last element in view
    // Can be set to 1 to ensure that the entire image is in view before the next request is made

    const lastImage = document.querySelector(".img:last-child")
    console.log(lastImage)

    if (!lastImage) return;

    observer.observe(lastImage);

    return () => {
      observer.unobserve(lastImage);
      observer.disconnect();
    }
  }, [data, setPage])

  return (
    <div>
      {
        data.map((image) => (
          <img src={image.download_url} alt={image.author} key={image.id} className="img" />
        ))
      }
    </div>
  )
}
