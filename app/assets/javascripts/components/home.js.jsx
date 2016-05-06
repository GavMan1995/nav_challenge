class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {form: true, user_state: "STATE", address: "", city: "", zip: "", stateNum: "",
                 answer: "", webpage: "", suggestion: "", zestimate: "", population: "", answerColor: "",
                 gotAnswer: false, loading: false};
    this.firstForm = this.firstForm.bind(this);
    this.Answer = this.Answer.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(e) {
    e.preventDefault();
    this.state.address = this.refs.address.value;
    this.state.city = this.refs.city.value;
    this.state.zip = this.refs.zip.value;
    this.state.form = false
    this.state.loading = true
    $.ajax({
      url: '/answer',
      type: 'GET',
      data: {address: this.state.address, city: this.state.city,
            zip: this.state.zip, state_num: this.state.stateNum,
            state: this.state.user_state}
    }).done(data => {
      this.setState({ answer: data.answer, webpage: data.webpage,
                    suggestion: data.suggestion, zestimate: data.zestimate,
                    population: data.population, answerColor: data.answer_color,
                    gotAnswer: true})
    }).fail(data =>{
      console.log(data);
    });
  }


  Answer() {
    let zestimate = ""
    let sellHouse = ""
    if (this.state.gotAnswer == true) {
      let url = `${this.state.webpage}`
      let color = `${this.state.answerColor}`
      if (this.state.zestimate != false) {
        zestimate = `$${this.state.zestimate}`
        sellHouse = "If you would like to move, you house is worth:"
      }else {
        zestimate = ""
        sellHouse = ""
      };

      return (
        <div className="white-text center">
          <h1 className={color}>{this.state.answer}</h1>
          <a href="/">Restart Search</a>
          <div className="container">
            <h4 className="population">The population where you live is:</h4>
            <h3 className={color}>{this.state.population}</h3>
            <h4 className="center">{this.state.suggestion}</h4>
            <a href={url} target="_blank">GO HERE</a>
          </div>
          <h4 className="zesimate">{sellHouse}</h4>
          <h3 className="green-text">{zestimate}</h3>
          <br/>
          <br/>
        </div>

      );
    }else {
      return (
        <div></div>
      );
    }
  }

  firstForm() {

    if (this.state.form) {
      return(
        <div className="row">
          <form className="col m10 offset-m1 l8 offset-l2 s10 offset-s1 z-depth-3 grey darken-3" onSubmit={this.getAnswer}>
            <h4 className="yellow-text text-darken-2 center">Would you be safe in a zombie apocalypse?</h4>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Enter Address" id="address" type="text" className="validate white-text" required ref={"address"} autoFocus="true"/>
                <label for="address">Address</label>
              </div>
              <div className="input-field col s12">
                <input placeholder="Enter City" id="city" type="text" className="validate white-text" required ref={"city"}/>
                <label for="city">City</label>
              </div>
              <div className="input-field col s12 m6 center">
                <input placeholder="Enter Zip Code" id="ZIP code" type="text" className="validate white-text" required ref={"zip"}/>
                <label for="city">ZIP code</label>
              </div>

              <div className="input-field col s12 m3 center">
                <button className='dropdown-button btn-large grey darken-3 yellow-text text-darken-2' href='#' data-activates='dropdown1'>{this.state.user_state}</button>
                <ul id='dropdown1' className='dropdown-content grey darken-3'>
                  <li><a onClick={() => this.setState({user_state: "AL", stateNum: "01"})}>AL</a></li>
                  <li><a onClick={() => this.setState({user_state: "AK", stateNum: "02"})}>AK</a></li>
                  <li><a onClick={() => this.setState({user_state: "AZ", stateNum: "04"})}>AZ</a></li>
                  <li><a onClick={() => this.setState({user_state: "AR", stateNum: "05"})}>AR</a></li>
                  <li><a onClick={() => this.setState({user_state: "CA", stateNum: "06"})}>CA</a></li>
                  <li><a onClick={() => this.setState({user_state: "CO", stateNum: "08"})}>CO</a></li>
                  <li><a onClick={() => this.setState({user_state: "CT", stateNum: "09"})}>CT</a></li>
                  <li><a onClick={() => this.setState({user_state: "DE", stateNum: "10"})}>DE</a></li>
                  <li><a onClick={() => this.setState({user_state: "FL", stateNum: "12"})}>FL</a></li>
                  <li><a onClick={() => this.setState({user_state: "GA", stateNum: "13"})}>GA</a></li>
                  <li><a onClick={() => this.setState({user_state: "HI", stateNum: "15"})}>HI</a></li>
                  <li><a onClick={() => this.setState({user_state: "ID", stateNum: "16"})}>ID</a></li>
                  <li><a onClick={() => this.setState({user_state: "IL", stateNum: "17"})}>IL</a></li>
                  <li><a onClick={() => this.setState({user_state: "IN", stateNum: "18"})}>IN</a></li>
                  <li><a onClick={() => this.setState({user_state: "IA", stateNum: "19"})}>IA</a></li>
                  <li><a onClick={() => this.setState({user_state: "KS", stateNum: "20"})}>KS</a></li>
                  <li><a onClick={() => this.setState({user_state: "KY", stateNum: "21"})}>KY</a></li>
                  <li><a onClick={() => this.setState({user_state: "LA", stateNum: "22"})}>LA</a></li>
                  <li><a onClick={() => this.setState({user_state: "ME", stateNum: "23"})}>ME</a></li>
                  <li><a onClick={() => this.setState({user_state: "MD", stateNum: "24"})}>MD</a></li>
                  <li><a onClick={() => this.setState({user_state: "MA", stateNum: "25"})}>MA</a></li>
                  <li><a onClick={() => this.setState({user_state: "MI", stateNum: "26"})}>MI</a></li>
                  <li><a onClick={() => this.setState({user_state: "MN", stateNum: "27"})}>MN</a></li>
                  <li><a onClick={() => this.setState({user_state: "MS", stateNum: "28"})}>MS</a></li>
                  <li><a onClick={() => this.setState({user_state: "MO", stateNum: "29"})}>MO</a></li>
                  <li><a onClick={() => this.setState({user_state: "MT", stateNum: "30"})}>MT</a></li>
                  <li><a onClick={() => this.setState({user_state: "NE", stateNum: "31"})}>NE</a></li>
                  <li><a onClick={() => this.setState({user_state: "NV", stateNum: "32"})}>NV</a></li>
                  <li><a onClick={() => this.setState({user_state: "NH", stateNum: "33"})}>NH</a></li>
                  <li><a onClick={() => this.setState({user_state: "NJ", stateNum: "34"})}>NJ</a></li>
                  <li><a onClick={() => this.setState({user_state: "NM", stateNum: "35"})}>NM</a></li>
                  <li><a onClick={() => this.setState({user_state: "NY", stateNum: "36"})}>NY</a></li>
                  <li><a onClick={() => this.setState({user_state: "NC", stateNum: "37"})}>NC</a></li>
                  <li><a onClick={() => this.setState({user_state: "ND", stateNum: "38"})}>ND</a></li>
                  <li><a onClick={() => this.setState({user_state: "OH", stateNum: "39"})}>OH</a></li>
                  <li><a onClick={() => this.setState({user_state: "OK", stateNum: "40"})}>OK</a></li>
                  <li><a onClick={() => this.setState({user_state: "OR", stateNum: "41"})}>OR</a></li>
                  <li><a onClick={() => this.setState({user_state: "PA", stateNum: "42"})}>PA</a></li>
                  <li><a onClick={() => this.setState({user_state: "RI", stateNum: "44"})}>RI</a></li>
                  <li><a onClick={() => this.setState({user_state: "SC", stateNum: "45"})}>SC</a></li>
                  <li><a onClick={() => this.setState({user_state: "SD", stateNum: "46"})}>SD</a></li>
                  <li><a onClick={() => this.setState({user_state: "TN", stateNum: "47"})}>TN</a></li>
                  <li><a onClick={() => this.setState({user_state: "TX", stateNum: "48"})}>TX</a></li>
                  <li><a onClick={() => this.setState({user_state: "UT", stateNum: "49"})}>UT</a></li>
                  <li><a onClick={() => this.setState({user_state: "VT", stateNum: "50"})}>VT</a></li>
                  <li><a onClick={() => this.setState({user_state: "VA", stateNum: "51"})}>VA</a></li>
                  <li><a onClick={() => this.setState({user_state: "WA", stateNum: "53"})}>WA</a></li>
                  <li><a onClick={() => this.setState({user_state: "WV", stateNum: "54"})}>WV</a></li>
                  <li><a onClick={() => this.setState({user_state: "WI", stateNum: "55"})}>WI</a></li>
                  <li><a onClick={() => this.setState({user_state: "WY", stateNum: "56"})}>WY</a></li>
                </ul>
              </div>
              <div className="col s6 offset-s3 m3 s-btn center">
                <button type="submit" className="btn-large red darken-2 black-text">submit</button>
              </div>
            </div>

          </form>
        </div>
      );
    }else {
      return (
        <div></div>
      );
    }

  }

  render(){
    return(
      <div>
        {this.firstForm()}
        {this.Answer()}
      </div>
    );
  }
}
