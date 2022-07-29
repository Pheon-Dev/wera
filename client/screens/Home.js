import React, { useState, useEffect } from "react";
import { client } from "../client";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const Home = () => {
  const [workers, setWorkers] = useState([]);
  const [jobID, setJobID] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [description, setDescription] = useState("");

  function fetchWorkers() {
    const query = '*[_type == "jobs"]';

    client.fetch(query).then((data) => {
      setWorkers(data);
    });
  }

  useEffect(() => {
    const query = '*[_type == "jobs"]';

    client.fetch(query).then((data) => {
      setWorkers(data);
    });
  }, []);

  function renderWorkers(worker, index) {
    return (
      <View key={index}>
        <Text style={{ ...FONTS.h3, color: COLORS.black }}>
          {worker.date + "-" + worker.firstName + " " + worker.lastName}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={{ ...FONTS.h3, color: COLORS.black }}>Good Morning</Text>
      {workers.map((worker, index) => renderWorkers(worker, index))}
    </View>
  );
};

export default Home;
