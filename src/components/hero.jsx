function Hero(props) {
  return (
    <div>
      <div>
        <div>
          <label>{props.name}</label>
          <img src={props.imgLink} alt={props.name}></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
