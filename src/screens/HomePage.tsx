import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { get, ref, remove } from 'firebase/database';
import { rtdb } from '../firebase/firebaseConfig';
import { useScreenStore } from '../store/pageStore';
import { useLoadingStore, useItemStore, useCurrentFamilyStore } from '../store/firebaseStore';
import styles from '../style/styles';
import { colors } from '../style/theme';

const HomePage = () => {
  const setCurrentScreen = useScreenStore((s) => s.setCurrentScreen);
  const itemLoading = useLoadingStore((s) => s.itemLoading);
  const setItemLoading = useLoadingStore((s) => s.setItemLoading);
  const items = useItemStore((s) => s.items);
  const setItems = useItemStore((s) => s.setItems);
  const currentFamily = useCurrentFamilyStore((s) => s.currentFamily);

  useEffect(() => {
    if (!currentFamily?.uid) return;

    const list = async () => {
      setItemLoading(true);
      const snapshot = await get(ref(rtdb, currentFamily.uid));
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, val]: any) => ({
          id,
          chore: val.chore,
        }));
        setItems(data);
      } else {
        setItems([]);
      }
      setItemLoading(false);
    };

    list();
  }, [currentFamily]);

  const handleCheck = (item: any) => {
    Alert.alert(
      'Are you sure?',
      `Check "${item.chore}" as done?`,
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            await remove(ref(rtdb, `${currentFamily?.uid}/${item.id}`));
            setItems((prev) => prev.filter((i) => i.id !== item.id));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Family's Chores</Text>

      {itemLoading ? (
        <View style={styles.emptyState}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No chores yet.{'\n'}Tap + to add one.</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          style={{ marginTop: 20 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row} onPress={() => handleCheck(item)}>
              <View style={styles.checkbox} />
              <Text style={styles.labelActive}>{item.chore}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity style={styles.fab} onPress={() => setCurrentScreen('addtodo')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;