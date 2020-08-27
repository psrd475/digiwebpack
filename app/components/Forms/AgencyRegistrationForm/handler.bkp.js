handleOwner = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}

handleOwnerSubmit = (e) => {
  const { owner_name, owner_id, phone_number } = this.state

  const addowner = this.props.agencyData.get('OwnerList').push({ owner_name, owner_id, phone_number });
  let tem = this.props.agencyData;
  tem = tem.set('OwnerList', addowner);

  this.props.addInfo({ agencyData: tem });

  this.setState({ owner_name: '', owner_id: '', phone_number: '' })
}

handleChange = (e) => {
  let agencyData = this.props.agencyData
  const { name, value } = e.target;

  let agencyDat = agencyData.set(name, value);
  this.props.addInfo({ agencyData: agencyDat });
}

handlelogo = (e) => {
  if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('image')) {
    let agencyDataTemp = this.props.agencyData.set('AgencyLogo', e.target.files[0])
    this.props.addInfo({ agencyData: agencyDataTemp });
  }
}

handlefiles = (e) => {
  if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('pdf')) {
    let agencyDataTemp = this.props.agencyData.set('RegistryFile', e.target.files[0])
    this.props.addInfo({ agencyData: agencyDataTemp });
  }
}





let agency = this.props.agencyData;
const regFile = agency.get('RegistryFile').name;
const agencyLogo = agency.get('AgencyLogo').name;
const ownerList = agency.get('OwnerList').size;
const agencyData = this.props.agencyData.get('OwnerList');

const countryname = countrydetails.map((item, index) => <option key={index} value={item.name}>{item.name}</option>);
const ownerData = agencyData.map((item, key) => {
  return (
    <tr key={key}>
      <td>{item.owner_name}</td>
      <td>{item.owner_id}</td>
      <td>{item.phone_number}</td>
      <td>
        <a
          href="#"
          className="table-action text-success"
          data-toggle="modal"
          data-target="#addbranch"
        >
          <i className="fal fa-fw fa-pencil-alt" />
        </a>
      </td>
      <td>
        <a
          href="#"
          className="table-action text-danger"
          data-toggle="modal"
          data-target="#deleteitem"
          onClick={this.deleteChange}
        >
          <i className="fal fa-fw fa-trash-alt" />
        </a>
      </td>
    </tr>
  )
});
