// eslint-disable-next-line react/prop-types
const Icon = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Icon;
