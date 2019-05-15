import React from 'react';
import {Text, View, Button, StyleSheet,TouchableOpacity, Alert,Modal,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Textinput from '../src/components/textInput';
import ModalClass from '../src/components/modal';
import {sender, login, start_login, login_success, login_fail} from '../src/actions';
import {connect} from 'react-redux';

class DetailsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      vis: false,
      user: '',
      email: '',
      pass: '',
      confirm: '',
      mismatch: false

    }
  }
  static navigationOptions = {
    title: 'Details',
    headerStyle:{
      backgroundColor: '#2196f3'
    },
    headerRight: (<Icon
      name = "bars"
      color = "green"
      size = {33}
      style = {{right: 10}}
      onPress={()=> {console.warn('am pressed')}}
      />
      )
  }
  handle_username = (username) =>{
    this.setState({username});
  }
  handle_user = (user) =>{
    this.setState({user});
  }
  handle_email = (email) =>{
    this.setState({email});
  }
  handle_pass = (pass) =>{
    this.setState({pass});
  }
  handle_confirm = (confirm) =>{
    this.setState({confirm});
  }
  handle_password= (password) =>{
    this.setState({password});
  }
  finali = async() => {
    const {username, password} = this.state;
    if(username == '' && password == ''){
      Alert.alert('Warning', "username or password can not be empty");
      return;
    }
    const send = {username, password};
    this.props.start_login();
    await fetch('http://10.42.0.1:3000/api/native',{
      method: "post",
      headers: {'Accept': 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify(send)
    }).then(reponse =>reponse.json()).then((res) => {
      this.props.login_success(res)
    }).catch((err) => {
      this.props.login_fail(err.message)
    });
    this.setState({
      username: '',
      password: ''
    })
  }
  closer =() => {
    this.setState({
      vis: !this.state.vis
    })
  }
  add_user =() => {
    const {user, email, pass, confirm } = this.state;
    if(user == '' && pass == '' && email == ''){
      Alert.alert('Empty fields detected', 'please some fields are not filled');
      return;
    }else if (pass !== confirm){
      this.setState({
        mismatch: true
      });
      return;
    }
    const new_state = {user, email, pass};
    this.props.sender(new_state);
    this.setState({
      user: '',
      email: '',
      pass: '',
      confirm: ''
    })
  }
  render() {
    return (
      <View style = {styles.container}>
      <View style = {styles.title}>
      <Text style = {styles.tex}>Naco Messanger </Text>

      </View>
      <View style = {styles.bod}>
        <Textinput
        placeholder = "username"
        value = {this.state.username}
        handleChange = {this.handle_username}
        entry = {false}
        paswd = {false}
         />
         <Textinput
         placeholder = "password"
         value = {this.state.password}
         handleChange = {this.handle_password}
         entry = {true}
         paswd = {true}
          />
        <View>
        <Button title = "Login" color = "blue" onPress = {this.finali} />
        <ActivityIndicator color = "green" size = "large"  animating = {this.props.first.loading}/>
        </View>
        <View style = {styles.end}>
        <Text>Dont have an Account? </Text>
        <TouchableOpacity onPress = {this.closer}>
          <Text style = {styles.ink}>Create Account Now !!! </Text>
        </TouchableOpacity>
        {this.props.first.error? (<Text>{this.props.first.error}</Text>): null}
        {this.props.first.respo && this.props.first.respo.data === null? (<Text>wrong  username </Text>): null}
        {this.props.first.respo && this.props.first.respo.data !== null? this.props.navigation.navigate('Dashboard'): null}
        </View>
        <View>
        <Modal animationType = "slide"  transparent = {false} visible = {this.state.vis} onRequestClose = {this.closer}>
        <View>
        <View>
        <Text style = {styles.mod1}>Please fill in your credentials</Text>
        <View>
        <Textinput
        placeholder = "username"
        value = {this.state.user}
        handleChange = {this.handle_user}
        entry = {false}
        paswd = {false}
         />
         <Textinput
         placeholder = "email"
         value = {this.state.email}
         handleChange = {this.handle_email}
         entry = {false}
         paswd = {false}
          />
          <Textinput
          placeholder = "password"
          value = {this.state.pass}
          handleChange = {this.handle_pass}
          entry = {true}
          paswd = {true}
           />
           <Textinput
           placeholder = "confirm password"
           value = {this.state.confirm}
           handleChange = {this.handle_confirm}
           entry = {true}
           paswd = {true}
            />
        </View>
        </View>
        <View style = {styles.but}>
          <Button title = "Create Account" color = "blue" onPress = {this.add_user} />
         <Button color = "red" title = "Cancel" onPress = {this.closer} />
        </View>
        {this.state.mismatch && (<Text>passwords not matching</Text>)}

        </View>
      </Modal>


        </View>
      </View>
      </View>
    );
  }
}
const mapStateToProps =(state) => ({
  first: state.first
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  title: {
    flex: 1
  },
  bod:{
    flex:2
  },
  but: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:  'stretch'
  },
  tex: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  end: {
    margin: 15
  },
  ink: {
    color: 'blue',
    fontSize: 25
  },
  mod1: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 15
  }
})
export default connect(mapStateToProps, {sender, login, start_login, login_fail, login_success})(DetailsScreen);
