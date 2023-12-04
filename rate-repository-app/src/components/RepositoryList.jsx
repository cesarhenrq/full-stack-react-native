import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

import { useQuery } from "@apollo/client";

import RepositoryItem from "./RepositoryItem";

import { GET_REPOSITORIES } from "../graphql/queries";

import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color={theme.colors.appBarBackground} />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem key={item.id} repository={item} />
      )}
    />
  );
};

export default RepositoryList;
