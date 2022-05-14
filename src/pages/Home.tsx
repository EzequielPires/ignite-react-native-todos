import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: tasks.length + 1,
      title: newTaskTitle,
      done: false
    }
    setTasks(oldValue => [...oldValue, data]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks(tasks.map(item => {
      item.id === id ? item.done = !item.done : null;
      return item;
    }));
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(item => item.id != id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})