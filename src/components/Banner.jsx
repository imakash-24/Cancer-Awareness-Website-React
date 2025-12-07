import React from 'react'

const Banner = () => {
  return (
   <section className="banner">
      <img
        src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1500&q=80"
        alt="Cancer Awareness"
        className="banner-img"
      />

      <div className="banner-text">
        <h1>Cancer Awareness & Support</h1>
        <p>
          Together we fight cancer. Spreading awareness, hope, and support for every individual.
        </p>
      </div>
    </section>
  )
}

export default Banner
