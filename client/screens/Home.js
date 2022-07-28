import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { client } from "../client";

const Home = () => {
  const [workers, setWorkers] = useState("");

  function fetchWorkers() {
      const query = '*[_type == "jobs"]';

      client.fetch(query).then((data) => {
          setWorkers(data);
        })
  }

  useEffect(() => {
    fetchWorkers()
    }, [])

  return (
    <View>
    <Text>
    {workers}
    </Text>
    </View>
  )
}

export default Home;

