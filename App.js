class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'herbatka', active: true },
      { id: 2, name: 'ziemniaki', active: false },
      { id: 3, name: 'kasza', active: false },
      { id: 4, name: 'zupa wodna', active: false },
      { id: 5, name: 'wrzątek', active: true },
      { id: 6, name: 'chleb', active: false },
      { id: 7, name: 'skwarki', active: true },
    ]
  }

  handleChangeStatus = (id) => {
    console.log(id);
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }

      return item;

    })

    this.setState({
      items
    })


  }

  render() {

    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
      </React.Fragment>
    );
  }
}