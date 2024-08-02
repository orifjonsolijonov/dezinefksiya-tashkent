import React from 'react';

function ServiceTypeCard({ title, description, images }) {
    return (
        <section className="serviceType">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="cta-txt">Mutaxassislarni band qiling!</span>
            <div className="serviceType-images_wrapper">
                {images.map((img, index) => (
                    <img key={index} src={img} alt="service type" />
                ))}
            </div>
        </section>
    );
}

export default ServiceTypeCard;
