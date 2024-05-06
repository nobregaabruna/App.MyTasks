import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Task {
  id: string;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({tasks}: TaskListProps) => {
  return (
    <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTask}>
            <Text style={styles.subtitleTask}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
  );

}

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  subtitleTask: {
    color: '#eba417',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
