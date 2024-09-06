function Hero(props) {
  return (
    <div>
      <hr />
      <img src={props.imgLink} alt={props.name} width="500px"></img>
      <div>
        <h2>{props.name}</h2>
        <p>{props.universe}</p>
        <p>{props.alterego}</p>
        <p>{props.occupation}</p>
        <p>{props.friends}</p>
        <p>{props.superpowers}</p>
        <p>{props.info}</p>
        <hr />
      </div>
    </div>
  );
}

export default Hero;
