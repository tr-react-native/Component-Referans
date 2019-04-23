import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {styleSayfa} from './style';
import Kutu from './component/kutu';


export default class Root extends Component{
    constructor(props)
    {
        super(props);
    }

    kutuPress(ref)
    {
        
        console.log(this.refs["yakup"],'asd');
        console.log(this.refs[0+"_kutu"],'bb');
         

        this.refs[0+"_kutu"].setState({
            secili:true,
        });
        
        
    }

    render() {
        let say = [];
        for (let index = 0; index < 1; index++) {
            say.push(false);
        }
        const comp = say.map((data,index)=>{
            const ref = index+"_kutu";
            return(<Kutu key={index} secili={data} ref={ref} onPress={ ()=>this.kutuPress(ref) } style={{backgroundColor:'blue'}}/>)
        })
        return (
            <View style={styleSayfa.container}>
                 <TouchableOpacity ref={"yakup"} onPress={()=>this.kutuPress()} style={{height:100,width:200,backgroundColor:'red'}}>
                     <Text>YAKUP DADA  ASDASD</Text>
                 </TouchableOpacity>
                 {comp}
            </View>
        );
    }
}

