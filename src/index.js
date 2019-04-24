import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {styleSayfa} from './style';
import Kutu from './component/kutu';

let flag = false;
export default class Root extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            say:[],
        }
    }
    componentWillMount()
    {
        let say=[];
        for (let index = 0; index < 100; index++) {
            say.push(false);
        }
        this.setState({say});
    }
    
    kutuPress(ref)
    {
        
        if(ref=="touchRef")
        {
            const kutu = this.refs[ref];
            kutu.setNativeProps({
                style:{
                    backgroundColor:flag?'red':'blue',
                }
            });
            console.log(kutu.props.style);
            flag = !flag;
            return;
        } 
        
        //Kendi yazdığımız komponente render etmeden erişmek 
        const kutu = this.refs[ref];
        kutu.setState({
            secili:!kutu.state.secili,
        })
    }

    render() {

        const say = this.state.say;
        
        const comp = say.map((data,index)=>{
            
            const ref = index+"_kutu";
            return(<Kutu key={ref} secili={data} ref={ref} onPress={ ()=>this.kutuPress(ref)}/>)
        })
        
        return (
            <View style={styleSayfa.container}>
                 <TouchableOpacity ref={"touchRef"} onPress={()=>this.kutuPress("touchRef")} style={{height:100,width:200,backgroundColor:'red'}}>
                     <Text>Touch Ref</Text>
                 </TouchableOpacity>
                 <ScrollView>
                    {comp}
                 </ScrollView>
            </View>
        );
    }
}

