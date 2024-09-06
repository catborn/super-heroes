function Hero(props) {
  return (
    <div>
      <img src={props.imgLink} alt={props.name} width="50%"></img>
      <div>
        <h2>{props.name}</h2>
        <p>{props.universe}</p>
        <p>{props.alterego}</p>
        <p>{props.occupation}</p>
        <p>{props.friends}</p>
        <p>{props.superpowers}</p>
        <div>{props.info}</div>
        <hr />
      </div>
    </div>
  );
}

export default Hero;
