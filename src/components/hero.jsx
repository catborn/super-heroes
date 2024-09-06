function Hero(props) {
  return (
    <div>
      <hr />
      <img src={props.imgLink} alt={props.name} width="500px"></img>
      <div>
        <h2>{props.name}</h2>
        <hr />
      </div>
    </div>
  );
}

export default Hero;
