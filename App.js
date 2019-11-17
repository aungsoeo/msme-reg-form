import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      nameMM: "",
      nameEn:"",

      nrcCodeMMChooseValue:"",
      nrcCodeMMChooseIndex:"",
      nrcStateMM:"",
      nrcTypeMMChooseValue:"",
      nrcTypeMMChooseIndex:"",
      nrcNoMM: "",

      nrcCodeENChooseValue:"",
      nrcCodeENChooseIndex:"",
      nrcStateEN:"",
      nrcTypeENChooseValue:"",
      nrcTypeENChooseIndex:"",
      nrcNoEN: "",

      fnameMM:"",
      fnameEn:"",
      race:"",
      religion:"",
      education:"",
      dob:"",

      tshchoosenValue: "",
      tshchoosenIndex: "",

      address:"",
      phone:"",
      email:"",

      nameMMRequire:false,
      nameEnRequire:false,

      fnameMMRequire:false,
      fnameEnRequire:false,

      nrcMMRequired:false,
      nrcEnRequired:false,

    };
  }

  onChangeText = (key, val) => {

    if(key=='nameMM'){
      this.setState({
        nameMMRequire:false,
        [key]: val
      })
    }else if(key=='nameEn'){
      this.setState({
        nameEnRequire:false,
        [key]: val
      })
    }else if(key=='fnameMM'){
      this.setState({
        fnameMMRequire:false,
        [key]: val
      })
    }else if(key=='fnameEn'){
      this.setState({
        fnameEnRequire:false,
        [key]: val
      })
    }else if(key=='nrcNoMM' || key=='nrcStateMM'){
      this.setState({
        nrcMMRequired:false,
        [key]: val
      })
    }else if(key=='nrcNoEN' || key=='nrcStateEN'){
      this.setState({
        nrcEnRequired:false,
        [key]: val
      })
    }else{
      this.setState({
        [key]: val
      })
    }
    
  };
  signUp = async () => {
    const myObjStr = JSON.stringify(this.state);

    if(this.state.nameMM==''){
      this.setState({
        nameMMRequire:true
        
      });
    } 
    if(this.state.nameEn==''){
      this.setState({
        nameEnRequire:true
      });
    } 
    if(this.state.fnameMM==''){
      this.setState({
        fnameMMRequire:true
      });
    } 
    if(this.state.fnameEn==''){
      this.setState({
        fnameEnRequire:true
      });
    } 
    if(this.state.nrcNoMM==''){
      this.setState({
        nrcMMRequired:true
      });
    } 
    if(this.state.nrcNoEN==''){
      this.setState({
        nrcEnRequired:true
      });
    }

    
    if(this.state.nameMM!='' && this.state.nameEn!='' && this.state.fnameMM!='' && this.state.fnameEn!=''){
      alert("User successfully signed up!");
      this.clearState();
    }
      
    
  };

  clearState() {
    this.setState({
      nameMM: "",
      nameEn:"",

      nrcCodeMMChooseValue:"",
      nrcCodeMMChooseIndex:"",
      nrcStateMM:"",
      nrcTypeMMChooseValue:"",
      nrcTypeMMChooseIndex:"",
      nrcNoMM: "",

      nrcCodeENChooseValue:"",
      nrcCodeENChooseIndex:"",
      nrcStateEN:"",
      nrcTypeENChooseValue:"",
      nrcTypeENChooseIndex:"",
      nrcNoEN: "",

      fnameMM:"",
      fnameEn:"",
      race:"",
      religion:"",
      education:"",
      dob:"",

      tshchoosenValue: "",
      tshchoosenIndex: "",

      address:"",
      phone:"",
      email:"",
    });
  }


  render() {
    var tshArr = [
      { id: 1, position: "ပျဉ်းမနား" },
      { id: 2, position: "လယ်ဝေး" },
      { id: 3, position: "တပ်ကုန်း" },
      { id: 4, position: "ဇေယျာသီရိ" },
      { id: 5, position: "ဗုဗ္ဗသီရိ" },
      { id: 6, position: "ဉတ္တရသီရိ" },
      { id: 7, position: "ဇဗ္ဗူသီရိ" },
      { id: 8, position: "ဒက္ခိဏသီရိ" }
    ];

    var nrcCodeMMArr =[
      { id: 1, position: "၁" },
      { id: 2, position: "၂" },
      { id: 3, position: "၃" },
      { id: 4, position: "၄" },
      { id: 5, position: "၅" },
      { id: 6, position: "၆" },
      { id: 7, position: "၇" },
      { id: 8, position: "၈" },
      { id: 9, position: "၉" },
      { id: 10, position: "၁၀" },
      { id: 11, position: "၁၁" },
      { id: 12, position: "၁၂" },
      { id: 13, position: "၁၃" },
      { id: 14, position: "၁၄" }
    ];

    var nrcTypeMM = [
      { id: 1, position: "နိုင်" },
      { id: 2, position: "ပြု" },
    ];

    var nrcCodeENArr =[
      { id: 1, position: "1" },
      { id: 2, position: "2" },
      { id: 3, position: "3" },
      { id: 4, position: "4" },
      { id: 5, position: "5" },
      { id: 6, position: "6" },
      { id: 7, position: "7" },
      { id: 8, position: "8" },
      { id: 9, position: "9" },
      { id: 10, position: "10" },
      { id: 11, position: "11" },
      { id: 12, position: "12" },
      { id: 13, position: "13" },
      { id: 14, position: "14" }
    ];

    var nrcTypeEN = [
      { id: 1, position: "N" },
      { id: 2, position: "P" },
    ];


    
    return (
      <View style={styles.container}>
        
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView>
              <View style={styles.formContainer}>
                <View style={{ flex:1, justifyContent:'center', alignItems:'center', marginBottom:20 }}>
                  <Image source={require('./assets/msme.png')} />
                </View>
                <Text style={styles.label}>လုပ်ငန်းရှင်အမည် *</Text>
                <TextInput
                  style={[styles.input,this.state.nameMMRequire ? {borderColor:'#b34'}:null ]}
                  value={this.state.nameMM}
                  onChangeText={val => this.onChangeText("nameMM", val)}
                  placeholder={"မြန်မာလိုထည့်ပါ"}
                />
                {
                  this.state.nameMMRequire?(
                    <Text style={styles.require}>လုပ်ငန်းရှင်အမည် (မြန်မာ)ထည့်ပါ</Text>
                  ):null
                }
                <TextInput
                  style={[styles.input,this.state.nameEnRequire ? {borderColor:'#b34'}:null ]}
                  value={this.state.nameEn}
                  onChangeText={val => this.onChangeText("nameEn", val)}
                  placeholder={"အင်္ဂလိပ်လိုထည့်ပါ"}
                />
                {
                  this.state.nameEnRequire?(
                    <Text style={styles.require}>လုပ်ငန်းရှင်အမည် (အင်္ဂလိပ်)ထည့်ပါ</Text>
                  ):null
                }

                <Text style={styles.label}>နိုင်ငံသားစီစစ်ရေးကဒ်အမှတ် *</Text>
                <View style={{ flex:1, flexDirection:"row",}}>
                  <View  style={{ width:'15%', marginRight:5}}>
                    <Picker
                      style={styles.tsh}
                      selectedValue={this.state.nrcCodeMMChooseValue}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({
                          nrcCodeMMChooseValue: itemValue,
                          nrcCodeMMChooseIndex: itemIndex
                        })
                      }
                    >
                      {nrcCodeMMArr.map((data, index) => {
                        return (
                          <Picker.Item
                            key={index}
                            label={data.position}
                            value={data.id}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                  <View style={{ width:'25%', marginRight:5}}>
                    <TextInput
                      style={[styles.input,this.state.nrcMMRequired ? {borderColor:'#b34'}:null ]}
                      value={this.state.nrcStateMM}
                      onChangeText={val => this.onChangeText("nrcStateMM", val)}
                      placeholder={"ပမန"}
                    />
                  </View>
                  <View  style={{  width:'15%', marginRight:5}}>
                    <Picker
                      style={styles.tsh}
                      selectedValue={this.state.nrcTypeMMChooseValue}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({
                          nrcTypeMMChooseValue: itemValue,
                          nrcTypeMMChooseIndex: itemIndex
                        })
                      }
                    >
                      {nrcTypeMM.map((data, index) => {
                        return (
                          <Picker.Item
                            key={index}
                            label={data.position}
                            value={data.id}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                  <View  style={{ width:'40%'}}>
                      <TextInput
                      style={[styles.input,this.state.nrcMMRequired ? {borderColor:'#b34'}:null ]}
                      value={this.state.nrcNoMM}
                      onChangeText={val => this.onChangeText("nrcNoMM", val)}
                      placeholder={"၁၁၁၁၁၁"}
                    />
                  </View>

                  
                  
                </View>
                {
                    this.state.nrcMMRequired?(
                      <View style={{ flex:1, flexDirection:"row",}}>
                        <Text style={styles.require}>နိုင်ငံသားစီစစ်ရေးကဒ်အမှတ် (မြန်မာ)ထည့်ပါ</Text>
                      </View>
                    ):null
                }
                <View style={{ flex:1, flexDirection:"row",}}>
                  <View  style={{  width:'15%', marginRight:5}}>
                    <Picker
                      style={styles.tsh}
                      selectedValue={this.state.nrcCodeENChooseValue}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({
                          nrcCodeENChooseValue: itemValue,
                          nrcTypeENChooseIndex: itemIndex
                        })
                      }
                    >
                      {nrcCodeENArr.map((data, index) => {
                        return (
                          <Picker.Item
                            key={index}
                            label={data.position}
                            value={data.id}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                  <View style={{  width:'25%', marginRight:5}}>
                    <TextInput
                      style={[styles.input,this.state.nrcEnRequired ? {borderColor:'#b34'}:null ]}
                      value={this.state.nrcStateEN}
                      onChangeText={val => this.onChangeText("nrcStateEN", val)}
                      placeholder={"PaMaNa"}
                    />
                  </View>
                  <View  style={{  width:'15%', marginRight:5}}>
                    <Picker
                      style={styles.tsh}
                      selectedValue={this.state.nrcTypeENChooseValue}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({
                          nrcTypeENChooseValue: itemValue,
                          nrcTypeENChooseIndex: itemIndex
                        })
                      }
                    >
                      {nrcTypeEN.map((data, index) => {
                        return (
                          <Picker.Item
                            key={index}
                            label={data.position}
                            value={data.id}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                  <View  style={{ width:'40%'}}>
                      <TextInput
                      style={[styles.input,this.state.nrcEnRequired ? {borderColor:'#b34'}:null ]}
                      value={this.state.nrcNoEN}
                      onChangeText={val => this.onChangeText("nrcNoEN", val)}
                      placeholder={"111111"}
                    />
                  </View>
                  
                </View>
                {
                    this.state.nrcEnRequired?(
                      <View style={{ flex:1, flexDirection:"row",}}>
                        <Text style={styles.require}>နိုင်ငံသားစီစစ်ရေးကဒ်အမှတ် (အင်္ဂလိပ်)ထည့်ပါ</Text>
                      </View>
                    ):null
                }

                <Text style={styles.label}>အဖအမည် *</Text>
                <TextInput
                  style={[styles.input,this.state.fnameMMRequire ? {borderColor:'#b34'}:null ]}
                  value={this.state.fnameMM}
                  onChangeText={val => this.onChangeText("fnameMM", val)}
                  placeholder={"မြန်မာလိုထည့်ပါ"}
                />
                {
                  this.state.fnameMMRequire?(
                    <Text style={styles.require}>အဖအမည် (မြန်မာ)ထည့်ပါ</Text>
                  ):null
                }
                <TextInput
                  style={[styles.input,this.state.fnameEnRequire ? {borderColor:'#b34'}:null ]}
                  value={this.state.fnameEn}
                  onChangeText={val => this.onChangeText("fnameEn", val)}
                  placeholder={"အင်္ဂလိပ်လိုထည့်ပါ"}
                />
                {
                  this.state.fnameEnRequire?(
                    <Text style={styles.require}>အဖအမည် (အင်္ဂလိပ်)ထည့်ပါ</Text>
                  ):null
                }

                <Text style={styles.label}>လူမျိုး</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.race}
                  onChangeText={val => this.onChangeText("race", val)}
                />
                <Text style={styles.label}>ကိုးကွယ်သည့်ဘာသာ</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.religion}
                  onChangeText={val => this.onChangeText("religion", val)}
                />
                <Text style={styles.label}>ပညာအရည်အချင်း</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.education}
                  onChangeText={val => this.onChangeText("education", val)}
                />

                <Text style={styles.label}>မွေးသက္ကရာဇ် *</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.dob}
                  onChangeText={val => this.onChangeText("dob", val)}
                />

                <Text style={styles.label}>မြို့နယ် *</Text>
                <Picker
                  style={styles.tsh}
                  selectedValue={this.state.tshchoosenValue}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({
                      tshchoosenValue: itemValue,
                      tshchoosenIndex: itemIndex
                    })
                  }
                >
                  {tshArr.map((data, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={data.position}
                        value={data.id}
                      />
                    );
                  })}
                </Picker>

                <Text style={styles.label}>နေရပ်လိပ်စာ</Text>
                <TextInput
                  style={[styles.input, { color: "black", minHeight:100, textAlignVertical:'top' }]}
                  value={this.state.address}
                  onChangeText={val => this.onChangeText("address", val)}
                  multiline={true}

                />

                <Text style={styles.label}>ဖုန်းနံပါတ် *</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.phone}
                  onChangeText={val => this.onChangeText("phone", val)}
                  keyboardType="phone-pad"
                />

                <Text style={styles.label}>Email *</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.email}
                  onChangeText={val => this.onChangeText("email", val)}
                  keyboardType="email-address"
                />

                <TouchableOpacity style={styles.signUpBtn} onPress={this.signUp}>
                  <Text style={styles.signUpTxt}>Register</Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  formContainer: {
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: "center",
    alignContent: "center"
  },
  label: {
    color: "#000",
    fontWeight:'bold',
    marginVertical:5,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 8,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
  },
  tsh: {
    color: "#000",
    borderColor: "red",
    backgroundColor: "#f0f0f0",
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 10,
    textAlign:"center"
  },
  genderView: {
    flexDirection: "row",
    marginBottom: 10
  },
  signUpBtn: {
    width: "100%",
    backgroundColor: "#3c3",
    borderRadius: 5
  },
  signUpTxt: {
    textAlign: "center",
    padding: 10,
    color:'#fff'
  },
  require:{
    fontSize:12,
    color:'#b34',
    marginBottom:15,
    marginLeft:5
  }
});
