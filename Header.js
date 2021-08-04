const Header = (props) => {

  const activeItems = props.items.filter(item => item.active);
  const number = activeItems.length;

  return (
    <React.Fragment>
      <h2>Ilosc zamowionych produktow: {number}</h2>
      <h2>{number ? `Do zaplaty: ${number * 10} zlotych` : `Nie kupujesz, to nie placisz`}</h2>
    </React.Fragment>
  )
}