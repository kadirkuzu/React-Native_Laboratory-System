import React, { useEffect, useState } from "react";
import { ScreenBackground } from "../../../shared/components/screen-background/component";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DarkInput } from "../../../shared/components/dark-input/component";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";
import { TextStyles } from "../../../shared/styles/text-styles";
import { auth } from "../../../../firebase";

export const ProfileScreen = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')

  const save = async () => {
    await auth.currentUser?.updateProfile({
      displayName: userName,
    }).then(()=>{
      auth.currentUser?.updateEmail(userEmail).then(()=>{
        Alert.alert("Success", "Email and username saved succesfully.")
      }).catch(err=>console.log(err))
    })
  }

  useEffect(()=>{
    setUserEmail(auth.currentUser?.email!)
    setUserName(auth.currentUser?.displayName!)
  },[])

  return (
    <ScreenBackground>
      <View style={Styles.screen}>
        <DarkInput value={userEmail} onChange={setUserEmail} placeholder="Email" label="Email" />
        <DarkInput value={userName} onChange={setUserName} placeholder="Username" label="Username" />
        <TouchableOpacity onPress={save} style={Styles.saveButton}>
          <Text style={[TextStyles.white, TextStyles.buttonText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
};