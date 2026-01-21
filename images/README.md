/* Image Placeholder Styles */
.program-image,
.leader-image,
.testimonial-image,
.hero-image,
.about-hero-image {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Default image backgrounds for missing images */
.program-image::before,
.leader-image::before {
    content: attr(data-alt);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    z-index: 1;
}
