// eslint-disable-next-line react/prop-types
const Images = ({ height, src }) => {
  return (
    <div>
      <div style={{ height: `${height}px`, width: "180px" }}>
        <img className="w-full h-full object-cover rounded-3xl" src={src} alt="" />
      </div>
    </div>
  );
};

export default Images;
