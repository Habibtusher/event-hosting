// eslint-disable-next-line react/prop-types
const Images = ({ height, src,width='160' }) => {
  return (
    <div>
      <div style={{ height: `${height}px`, width: `${width}px` }}>
        <img className="w-full h-full object-cover rounded-2xl" src={src} alt="" />
      </div>
    </div>
  );
};

export default Images;
