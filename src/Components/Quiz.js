import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../Consts';
import Icon from 'react-native-vector-icons/Ionicons';

const QuizItem = ({label, wrong, right, reason, onPress}) => {
  const reasonStyle = [
    styles.itemReason,
    {color: right ? '#2E7D32' : '#c62828'},
  ];
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.itemCheckbox}>
          {right && <Icon name="md-checkmark" size={20} color="#2E7D32" />}
          {wrong && <Icon name="md-close" size={20} color="#c62828" />}
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemLabel}>{label}</Text>
          {reason && <Text style={reasonStyle}>{reason}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Quiz = ({question, answers, answer, value = null, onValueChange}) => {
  const [selected, setSelected] = useState(value);

  const changeValue = newValue => {
    setSelected(newValue);
    onValueChange && onValueChange(newValue);
  };

  if (!question || !answers) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.separator} />
      <View style={styles.answers}>
        {answers.map((item, index) => {
          let wrong = false;
          let right = false;
          let reason = selected !== null && item.reason;

          if (typeof item === 'object' && selected !== null) {
            right = true;
          } else if (selected === index && typeof item !== 'object') {
            wrong = true;
          }

          return (
            <QuizItem
              key={index}
              label={typeof item === 'string' ? item : item.label}
              onPress={() => changeValue(index)}
              wrong={wrong}
              right={right}
              reason={reason}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.baseBackground,
    marginBottom: 24,
    padding: 24,
    marginHorizontal: -24,
    elevation: 3,
  },
  title: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
  },
  separator: {
    height: 4,
    backgroundColor: Colors.secondary,
    borderRadius: 2,
    width: 64,
    marginTop: 12,
  },
  answers: {
    marginTop: 12,
    marginBottom: -12,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  itemCheckbox: {
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent: {
    flex: 1,
  },
  itemLabel: {
    fontSize: 16,
    color: Colors.text,
  },
  itemReason: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.text,
    marginTop: 8,
  },
});

export default Quiz;
