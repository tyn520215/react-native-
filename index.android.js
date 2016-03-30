//GakkiXIao[T] react-native ≤ºæ÷¡∑œ∞
import React, {
    Image,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
    } from 'react-native';

var helloworld =React.createClass( {
  render() {
    return (
      //part1
    <View>
        <View style={[styles.height160,styles.row,{borderBottomWidth:0.5,borderColor:'black'}]}>
          <View style={[styles.height160,styles.part1_left]}>
            <View style={[{flex:1,marginTop:10}]}>
            <Text style = {[styles.color,styles.font16,styles.margintop13,styles.marginleftone]}>We Marry!</Text>
            <Text style = {[styles.font14,styles.margintop13,styles.marginleftone]}>Beatiful In the white</Text>
            <Image style={[styles.yue,styles.marginleftone]} source={require('image!a')}></Image>
              </View>
          </View>
          <View style={[styles.height160,styles.part1_right]}>
            <View style={[styles.row,{flex:1,marginTop:15,borderBottomWidth:0.5,borderColor:'black'},styles.height90]}>
              <View style={styles.part1_left}>
                <Text style={[styles.colororage,styles.font16,styles.marginleftone]}>hanbaoge</Text>
                <Text style={[styles.font14,styles.margintop13,styles.marginleftone]}>ten yuan</Text>
              </View>
              <View style={styles.part1_left}>
                <Image style={[{height:100}]} source={require('image!b')}></Image>
              </View>
            </View>
            <View style={[styles.row,styles.part1_left,styles.height70]}>
              <View style={[{borderRightWidth:0.5,borderColor:'black',flex:1}]}>
                <Text style={[{color:"red",fontSize:18}]}>people</Text>
                <Text style={[{color:"black",fontSize:16}]}>people.friend.fmaily</Text>
                <Image style={[{width:40,height:40,alignSelf:'center'}]} source={require('image!c')}></Image>
                </View>
              <View style={[{flex:1,fontSize:25}]}>
                <Text style={styles.marginleftone}>shop!</Text>
                <Text style={styles.marginleftone}>else</Text>
                <Image style={[{alignSelf:'center',height:40}]} source={require('image!d')}></Image>
              </View>
              </View>
          </View>
        </View>
        <View style={[{marginTop:30}]}>
            <View style={[styles.row,{height:80,marginTop:20,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'black'}]}>
              <View style={[{flex:1}]}>
                <Text style={[styles.color,{fontSize:18,marginLeft:10}]}>one RMB eat food</Text>
                <Text style={[{fontSize:16,color:'black',marginLeft:10}]}>New USER</Text>
                </View>
              <View style={[{flex:1,justifyContent:'center'}]}>
                <Image source={require('image!e')}></Image>
              </View>
            </View>
          <View style={styles.row}>
            <View style={[styles.part1_left,styles.column,{borderRightWidth:0.5,borderColor:'black'}]}>
              <View style={[styles.row,{marginTop:15}]}>
                <View style={[{flex:2,marginLeft:30}]}>
                  <Text style={[{fontSzie:20,color:'red'}]}>people happy day!</Text>
                  <Text style={[{fontSzie:16,color:'#e3e3e3'}]}>6.6RMB</Text>
                </View>
                <View style={{flex:1}}>
                  <Image source={require('image!f')} ></Image>
                </View>
              </View>
              <View style={[styles.row,{marginTop:15}]}>
                <View style={{flex:2,marginLeft:30}}>
                  <Text style={[{fontSzie:20,color:'red'}]}>people happy day!</Text>
                  <Text style={[{fontSzie:16,color:'#e3e3e3'}]}>6.6RMB</Text>
                </View>
                <View style={{flex:1}}>
                  <Image source={require('image!g')}></Image>
                </View>
              </View>
            </View>
            <View style={[styles.part1_left,styles.column]}>
              <View style={[styles.row,{marginTop:15}]}>
                <View style={{flex:2,marginLeft:30}}>
                  <Text style={[{fontSzie:20,color:'red'}]}>people happy day!</Text>
                  <Text style={[{fontSzie:16,color:'#e3e3e3'}]}>6.6RMB</Text>
                </View>
                <View style={{flex:1}}>
                  <Image source={require('image!h')}></Image>
                </View>
              </View>
              <View style={[styles.row,{marginTop:15}]}>
                <View style={{flex:2,marginLeft:30}}>
                  <Text style={[{fontSzie:20,color:'red'}]}>people happy day!</Text>
                  <Text style={[{fontSzie:16,color:'#e3e3e3'}]}>6.6RMB</Text>
                </View>
                <View style={{flex:1}}>
                  <Image source={require('image!i')}></Image>
                </View>
              </View>
            </View>
          </View>
          </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  font14:{
    fontSize:14
  },
  font16:{
    fontSize:16
  },
  color:{
    color:"red"
  },
  colororage:{
    color:"#FF6100"
  },
  row:{
    flexDirection:"row"
  },
  column:{
    flexDirection:"column"
  },
  height160:{
    height:230
  },
  height90:{
    height:140
  },
  height70:{
    height:90
  },
  part1_left:{
    flex:1
  },
  part1_right:{
    flex:2
  },
  margintop13:{
    marginTop:13

  },
  marginleftone:{
    marginLeft:20
  },
  yue:{
    height:120
  }
});

AppRegistry.registerComponent('HelloWorld', () => helloworld);
