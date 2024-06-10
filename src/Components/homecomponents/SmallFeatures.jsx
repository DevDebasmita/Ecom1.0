
import './SmallFeatures.css';

const features = [
  { image: '../s1.jpeg', title: 'High Quality', description: 'Crafted from top materials' },
  { image: '../s2.jpeg', title: 'Warranty Protection', description: 'Covered for 2 years' },
  { image: '../s3.jpeg', title: 'Free Shipping', description: 'Order over $150' },
  { image: '../s4.jpeg', title: '24 / 7 Support', description: 'Dedicated support' },
];

const SmallFeatures = () => {
  return (
    <div className="small-features-container">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <div className="feature-text">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallFeatures;
