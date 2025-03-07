import React from 'react';
import './styles/blogs.css'; // Single CSS file for all styles

const blogData = [
  {
    title: 'Crop Diversity & Agronomy - The Organic Research Centre',
    excerpt:
      'Explore how crop diversity and agronomy are reshaping sustainable agriculture. Learn about research on low-input crops, underutilized species, and organic plant breeding challenges.',
    link: 'https://www.organicresearchcentre.com/research/crop-diversity-agronomy/', // Replace with actual link
    image: 'blog1.png', // Placeholder image URL
  },
  {
    title: 'Why Organic Farming',
    excerpt:
      'Discover the principles of organic farming, a sustainable system using natural pest controls and fertilizers. A response to environmental harm from conventional agriculture.',
    link: 'https://www.britannica.com/topic/organic-farming', // Replace with actual link
    image: '/blog2.png', // Placeholder image URL
  },
  {
    title: 'Organic Farming Practices - Rodale Institute',
    excerpt:
      'Learn how organic farming harmonizes with nature, focusing on soil health, crop rotations, and sustainable practices like composting and no-till methods.',
    link: 'https://rodaleinstitute.org/why-organic/organic-farming-practices/', // Replace with actual link
    image: '/blog3.png', // Placeholder image URL
  },
];

const BlogsSection = () => {
  return (
    <section className="blogsSection">
      <h1 className="sectionTitle">Find Related Articles</h1>
      <div className="tilesContainer">
        {blogData.map((blog, index) => (
          <div key={index} className="tile">
            <div className="imageContainer">
              <img src={blog.image} alt={blog.title} className="blogImage" />
            </div>
            <h3 className="title">{blog.title}</h3>
            <p className="excerpt">{blog.excerpt}</p>
            <a href={blog.link} className="readMore">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;