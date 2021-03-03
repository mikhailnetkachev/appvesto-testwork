const Image = ({ alt, ...properties }) => (
  <img alt={alt} {...properties} />
);

Image.defaultProps = {
  alt: "illustration",
};

export default Image;
