function CardBrand({ item }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src={item.image} 
        alt={item.name}
        style={{
          width: "400px", 
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default CardBrand;
